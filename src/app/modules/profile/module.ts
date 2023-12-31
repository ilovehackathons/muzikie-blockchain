/* eslint-disable class-methods-use-this */

import {
  BaseModule,
  ModuleInitArgs,
  InsertAssetContext,
  BlockVerifyContext,
  ModuleMetadata,
  // TransactionVerifyContext,
  // VerificationResult,
  // TransactionExecuteContext,
  // GenesisBlockExecuteContext,
  // BlockExecuteContext,
  // BlockAfterExecuteContext,
} from 'lisk-sdk';
import { ProfileAccountStore } from './stores/profileAccount';
import { ProfileStore } from './stores/profile';
import { CreateCommand } from "./commands/create_command";
import { SetAttributesCommand } from "./commands/setAttribute_command";
import { ProfileEndpoint } from './endpoint';
import { ProfileMethod } from './method';
import {
  profileStoreSchema,
  accountStoreSchema,
  addressRequestSchema,
  idRequestSchema,
} from './schemas';
import { ProfileCreated } from './events/profileCreated';

export class ProfileModule extends BaseModule {
  public endpoint = new ProfileEndpoint(this.stores, this.offchainStores);
  public method = new ProfileMethod(this.stores, this.events);
  public commands = [
    new CreateCommand(this.stores, this.events),
    new SetAttributesCommand(this.stores, this.events),
  ];

  public constructor() {
    super();
    this.stores.register(ProfileAccountStore, new ProfileAccountStore(this.name, 0));
    this.stores.register(ProfileStore, new ProfileStore(this.name, 1));
    this.events.register(ProfileCreated, new ProfileCreated(this.name));
  }

  public metadata(): ModuleMetadata {
    return {
      stores: [],
      endpoints: [
        {
          name: this.endpoint.getAccount.name,
          request: addressRequestSchema,
          response: accountStoreSchema,
        },
        {
          name: this.endpoint.getProfile.name,
          request: idRequestSchema,
          response: profileStoreSchema,
        },
      ],
      commands: this.commands.map(command => ({
        name: command.name,
        params: command.schema,
      })),
      events: this.events.values().map(v => ({
        name: v.name,
        data: v.schema,
      })),
      assets: [],
    };
  }

  // Lifecycle hooks
  public async init(_args: ModuleInitArgs): Promise<void> {
    // initialize this module when starting a node
  }

  public async insertAssets(_context: InsertAssetContext) {
    // initialize block generation, add asset
  }

  public async verifyAssets(_context: BlockVerifyContext): Promise<void> {
    // verify block
  }

  // Lifecycle hooks
  // public async verifyTransaction(_context: TransactionVerifyContext): Promise<VerificationResult> {
  // verify transaction will be called multiple times in the transaction pool
  // }

  // public async beforeCommandExecute(_context: TransactionExecuteContext): Promise<void> {}

  // public async afterCommandExecute(_context: TransactionExecuteContext): Promise<void> {}

  // public async initGenesisState(_context: GenesisBlockExecuteContext): Promise<void> {}

  // public async finalizeGenesisState(_context: GenesisBlockExecuteContext): Promise<void> {}

  // public async beforeTransactionsExecute(_context: BlockExecuteContext): Promise<void> {}

  // public async afterTransactionsExecute(_context: BlockAfterExecuteContext): Promise<void> {}
}
