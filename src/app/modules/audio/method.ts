import { BaseMethod } from 'lisk-sdk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ModuleEndpointContext } from 'lisk-framework';
import { AudioAccountJSON, AudioJSON, Audio, AudioAccount, Store } from './types';
import { AudioAccountStore } from './stores/audioAccount';
import { AudioStore } from './stores/audio';
import { getAccount, getAudio } from './controllers/query';

export class AudioMethod extends BaseMethod {
  public async getAccount(context: ModuleEndpointContext): Promise<AudioAccountJSON> {
    const audioAccountStore = this.stores.get(AudioAccountStore);
    return getAccount(context, audioAccountStore as Store<AudioAccount>);
  }

  public async getAudio(context: ModuleEndpointContext): Promise<AudioJSON> {
    const audioSubStore = this.stores.get(AudioStore);
    return getAudio(context, audioSubStore as Store<Audio>);
  }
}
