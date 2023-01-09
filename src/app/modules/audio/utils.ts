import { ed } from '@liskhq/lisk-cryptography';

import { CreateCommandParams } from './types';

export const getNodeForName = (params: Pick<CreateCommandParams, 'name' | 'artistName'>): Buffer =>
  Buffer.from(`${params.name}${params.artistName}`, 'utf8');

export const verifyHash = (signature: Buffer, message: Buffer, publicKey: Buffer) => {
  let isCorrect = false;

  try {
    isCorrect = ed.verifyMessageWithPublicKey({
      message: message.toString('hex'),
      publicKey,
      signature,
    });
  } catch (e) {
    isCorrect = false;
  }
  return isCorrect;
};
