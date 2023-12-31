import { BaseEndpoint } from 'lisk-sdk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ModuleEndpointContext } from 'lisk-framework';
import { CollectionAccountJSON, CollectionJSON } from './types';
import { CollectionAccountStore } from './stores/collectionAccount';
import { CollectionStore } from './stores/collection';
import { getAccount, getCollection } from './controllers';

export class CollectionEndpoint extends BaseEndpoint {
  // Get account by address
  public async getAccount(context: ModuleEndpointContext): Promise<CollectionAccountJSON> {
    const collectionAccountSubStore = this.stores.get(CollectionAccountStore);
    return getAccount(context, collectionAccountSubStore);
  }

  // Get Collection by collectionID
  public async getCollection(context: ModuleEndpointContext): Promise<CollectionJSON> {
    const collectionSubStore = this.stores.get(CollectionStore);
    return getCollection(context, collectionSubStore);
  }
}
