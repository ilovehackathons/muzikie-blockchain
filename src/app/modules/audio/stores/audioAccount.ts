// eslint-disable-next-line import/no-extraneous-dependencies
import { BaseStore } from 'lisk-framework';
import { AudioAccount } from '../types';
import { accountStoreSchema } from '../schemas';

export class AudioAccountStore extends BaseStore<AudioAccount> {
  public schema = accountStoreSchema;
}
