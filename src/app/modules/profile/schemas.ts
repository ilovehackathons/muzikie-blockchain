export const profileStoreSchema = {
  $id: 'profile/profile',
  type: 'object',
  required: [
    'name',
    'nickName',
    'description',
    'socialAccounts',
    'avatarHash',
    'avatarSignature',
    'bannerHash',
    'bannerSignature',
    'creatorAddress',
    'nftUrl'
  ],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
    },
    nickName: {
      dataType: 'string',
      fieldNumber: 2,
    },
    description: {
      dataType: 'string',
      fieldNumber: 3,
    },
    socialAccounts: {
      type: 'array',
      fieldNumber: 4,
      items: {
        $id: 'profile/profile/socialAccounts',
        type: 'object',
        required: ['username', 'platform'],
        properties: {
          username: {
            dataType: 'string',
            fieldNumber: 1,
          },
          platform: {
            dataType: 'uint32',
            fieldNumber: 2,
          },
        },
      },
    },
    avatarHash: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
    avatarSignature: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    bannerHash: {
      dataType: 'bytes',
      fieldNumber: 7,
    },
    bannerSignature: {
      dataType: 'bytes',
      fieldNumber: 8,
    },
    creatorAddress: {
      dataType: 'bytes',
      format: 'lisk32',
      fieldNumber: 9,
    },
    nftUrl: {
      dataType: 'string',
      fieldNumber: 10,
    },
  },
};

export const accountStoreSchema = {
  $id: 'profile/account',
  type: 'object',
  required: ['profileID'],
  properties: {
    profileID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
  },
};

export const createCommandParamsSchema = {
  $id: 'profile/create',
  title: 'CreateAsset transaction asset for profile module',
  type: 'object',
  required: [
    'name',
    'nickName',
    'description',
    'socialAccounts',
    'avatarHash',
    'avatarSignature',
    'bannerHash',
    'bannerSignature',
    'nftUrl'
  ],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
    },
    nickName: {
      dataType: 'string',
      fieldNumber: 2,
    },
    description: {
      dataType: 'string',
      fieldNumber: 3,
    },
    socialAccounts: {
      type: 'array',
      fieldNumber: 4,
      items: {
        $id: 'profile/profile/socialAccounts',
        type: 'object',
        required: ['username', 'platform'],
        properties: {
          username: {
            dataType: 'string',
            fieldNumber: 1,
          },
          platform: {
            dataType: 'uint32',
            fieldNumber: 2,
          },
        },
      },
    },
    avatarHash: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
    avatarSignature: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    bannerHash: {
      dataType: 'bytes',
      fieldNumber: 7,
    },
    bannerSignature: {
      dataType: 'bytes',
      fieldNumber: 8,
    },
    nftUrl: {
      dataType: 'string',
      fieldNumber: 9,
    },
  },
};

export const setAttributesCommandParamsSchema = {
  $id: 'profile/setAttributes',
  title: 'setAttributeAsset transaction asset for profile module',
  type: 'object',
  required: [
    'profileID',
    'name',
    'nickName',
    'description',
    'socialAccounts',
    'avatarHash',
    'avatarSignature',
    'bannerHash',
    'bannerSignature',
    'nftUrl'
  ],
  properties: {
    profileID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
    name: {
      dataType: 'string',
      fieldNumber: 2,
    },
    nickName: {
      dataType: 'string',
      fieldNumber: 3,
    },
    description: {
      dataType: 'string',
      fieldNumber: 4,
    },
    socialAccounts: {
      type: 'array',
      fieldNumber: 5,
      items: {
        $id: 'profile/profile/socialAccounts',
        type: 'object',
        required: ['username', 'platform'],
        properties: {
          username: {
            dataType: 'string',
            fieldNumber: 1,
          },
          platform: {
            dataType: 'uint32',
            fieldNumber: 2,
          },
        },
      },
    },
    avatarHash: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    avatarSignature: {
      dataType: 'bytes',
      fieldNumber: 7,
    },
    bannerHash: {
      dataType: 'bytes',
      fieldNumber: 8,
    },
    bannerSignature: {
      dataType: 'bytes',
      fieldNumber: 9,
    },
    nftUrl: {
      dataType: 'string',
      fieldNumber: 10,
    },
  },
};


export const addressRequestSchema = {
  $id: '/profile/addressRequest',
  type: 'object',
  properties: {
    address: {
      type: 'string',
      format: 'lisk32',
    },
  },
  required: ['address'],
};

export const idRequestSchema = {
  $id: '/profile/idRequest',
  type: 'object',
  properties: {
    profileID: {
      type: 'string',
      format: 'hex',
    },
  },
  required: ['profileID'],
};

export const profileCreatedEventDataSchema = {
  $id: '/profile/events/profileCreatedData',
  type: 'object',
  required: ['creatorAddress', 'profileID'],
  properties: {
    creatorAddress: {
      dataType: 'bytes',
      format: 'lisk32',
      fieldNumber: 1,
    },
    profileID: {
      dataType: 'bytes',
      fieldNumber: 2,
    },
  },
};
