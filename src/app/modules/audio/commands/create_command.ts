/* eslint-disable class-methods-use-this */
import {
  BaseCommand,
  CommandVerifyContext,
  CommandExecuteContext,
  VerificationResult,
  VerifyStatus,
} from 'lisk-sdk';
import { AudioStore } from '../stores/audio';
import { AudioAccountStore } from '../stores/audioAccount';
import { CreateCommandParams, Audio, AudioAccount } from '../types';
import { createCommandParamsSchema } from '../schemas';
import { VALID_GENRES, MIN_RELEASE_YEAR } from '../constants';
import { getNodeForName, verifyHash } from '../utils';

export class CreateCommand extends BaseCommand {
  public schema = createCommandParamsSchema;

  // eslint-disable-next-line @typescript-eslint/require-await
  public async verify(
    context: CommandVerifyContext<CreateCommandParams>,
  ): Promise<VerificationResult> {
    const { params, transaction } = context;
    const thisYear = new Date().getFullYear();
    const numericYear = Number(params.releaseYear);
    if (numericYear < MIN_RELEASE_YEAR || numericYear > thisYear) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error(
          `Release year must be a number between ${MIN_RELEASE_YEAR} and ${thisYear}`,
        ),
      };
    }
    if (params.genre.some(item => item > VALID_GENRES.length)) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error('Genres should be selected from the list of valid genres'),
      };
    }
    if (
      params.owners.length === 0 ||
      params.owners.some(item => item.shares < 1) ||
      params.owners.reduce((acc, item) => acc + item.shares, 0) !== 100
    ) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error(
          'Owners should have a total of 100 shares. Each owner should have a positive number of shares.',
        ),
      };
    }

    const isHashGenuine = verifyHash(params.audioSignature, params.audioHash, transaction.senderPublicKey);
    if (!isHashGenuine) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error('The hash signature is not generated by the sender'),
      };
    }

    return { status: VerifyStatus.OK };
  }

  public async execute(context: CommandExecuteContext<CreateCommandParams>): Promise<void> {
    const { params, transaction } = context;
    // Get namehash output of the audio file
    const key = getNodeForName(params);

    const audioAccountSubStore = this.stores.get(AudioAccountStore);
    const audioSubStore = this.stores.get(AudioStore);

    // Check uniqueness of the NFT
    const audioExists = await audioSubStore.has(context, key);
    if (audioExists) {
      throw new Error('You have already created this audio.');
    }

    // Create the Audio object and save it on the blockchain
    const owners = params.owners.map(owner => ({
      address: owner.address,
      shares: owner.shares,
      income: BigInt(0),
    }));
    const audioObject: Audio = {
      ...params,
      owners,
      creatorAddress: transaction.senderAddress,
    };

    // Store the hash of the audio object in the sender account
    const accountExists = await audioAccountSubStore.has(context, transaction.senderAddress);
    if (accountExists) {
      const senderAccount: AudioAccount = await audioAccountSubStore.get(
        context,
        transaction.senderAddress,
      );
      senderAccount.audio.audios = [...senderAccount.audio.audios, key];
      await audioAccountSubStore.set(context, transaction.senderAddress, senderAccount);
    } else {
      await audioAccountSubStore.set(context, context.transaction.senderAddress, {
        audio: {
          audios: [key],
        },
      });
    }

    // @todo Here we should check if the Audio is already uploaded using steganography methods
    // Store the audio object in the blockchain
    await audioSubStore.set(context, key, audioObject);
  }
}
