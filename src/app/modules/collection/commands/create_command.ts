/* eslint-disable class-methods-use-this */
import {
  BaseCommand,
  CommandVerifyContext,
  CommandExecuteContext,
  VerificationResult,
  VerifyStatus,
} from 'lisk-sdk';
import { CollectionStore } from '../stores/collection';
import { CollectionAccountStore } from '../stores/collectionAccount';
import { CreateCommandParams, Collection, CollectionAccount } from '../types';
import { createCommandParamsSchema } from '../schemas';
import { validCollectionTypes, MIN_RELEASE_YEAR } from '../constants';
import { getEntityID, verifyHash } from '../../../utils';
import { CollectionCreated } from '../events/collectionCreated'

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
    if (!validCollectionTypes.includes(params.collectionType)) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error('Collection type should be selected from the list of valid types'),
      };
    }
    const isHashGenuine = verifyHash(params.coverSignature, params.coverHash, transaction.senderPublicKey);
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
    const id = getEntityID(context.transaction);

    const collectionAccountSubStore = this.stores.get(CollectionAccountStore);
    const collectionSubStore = this.stores.get(CollectionStore);

    // Check uniqueness of the NFT
    const collectionExists = await collectionSubStore.has(context, id);
    if (collectionExists) {
      throw new Error('You have already created this audio.');
    }

    // Create the Collection object and save it on the blockchain
    // Note: The audios list is initially empty
    const audioObject: Collection = {
      ...params,
      audios: [],
      creatorAddress: transaction.senderAddress,
    };

    // Store the hash of the audio object in the sender account
    const accountExists = await collectionAccountSubStore.has(context, transaction.senderAddress);
    if (accountExists) {
      const senderAccount: CollectionAccount = await collectionAccountSubStore.get(
        context,
        transaction.senderAddress,
      );
      senderAccount.collection.collections = [...senderAccount.collection.collections, id];
      await collectionAccountSubStore.set(context, transaction.senderAddress, senderAccount);
    } else {
      await collectionAccountSubStore.set(context, context.transaction.senderAddress, {
        collection: {
          collections: [id],
        },
      });
    }

    // Store the collection object in the blockchain
    await collectionSubStore.set(context, id, audioObject);

    // Emit a "New collection" event
    const collectionCreated = this.events.get(CollectionCreated);
    collectionCreated.add(context, {
      creatorAddress: context.transaction.senderAddress,
      collectionID: id,
    }, [context.transaction.senderAddress]);
  }
}