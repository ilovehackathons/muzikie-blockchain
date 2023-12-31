// eslint-disable-next-line import/no-extraneous-dependencies
import { ModuleEndpointContext } from 'lisk-framework';

export enum SocialAccountPlatform {
  Instagram = 0,
  Twitter = 1,
  Youtube = 2,
}

interface SocialAccount {
  username: string;
  platform: SocialAccountPlatform;
}

export interface Profile {
  name: string;
  nickName: string;
  description: string;
  socialAccounts: SocialAccount[];
  avatarHash: Buffer;
  avatarSignature: Buffer;
  bannerHash: Buffer;
  bannerSignature: Buffer;
  creatorAddress: Buffer;
  nftUrl: string;
}

export interface ProfileJSON {
  name: string;
  nickName: string;
  description: string;
  socialAccounts: SocialAccount[];
  avatarHash: string;
  avatarSignature: string;
  bannerHash: string;
  bannerSignature: string;
  creatorAddress: string;
  nftUrl: string;
}

export interface ProfileAccount {
  profileID: Buffer;
}

export interface ProfileAccountJSON {
  profileID: string;
}

export interface CreateCommandParams {
  name: string;
  nickName: string;
  description: string;
  socialAccounts: SocialAccount[];
  avatarHash: Buffer;
  avatarSignature: Buffer;
  bannerHash: Buffer;
  bannerSignature: Buffer;
  nftUrl: string;
}
export interface SetAttributesCommandParams {
  profileID: Buffer;
  name: string;
  nickName: string;
  description: string;
  socialAccounts: SocialAccount[];
  avatarHash: Buffer;
  avatarSignature: Buffer;
  bannerHash: Buffer;
  bannerSignature: Buffer;
  nftUrl: string;
}

export interface Store<Entity> {
  get: (context: ModuleEndpointContext, key: Buffer) => Promise<Entity>;
  has: (context: ModuleEndpointContext, key: Buffer) => Promise<boolean>;
}

export interface ProfileCreatedEventData {
  creatorAddress: Buffer;
  profileID: Buffer;
}
