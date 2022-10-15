import type { IStoreConfig } from '../interfaces/config.interface';

/**
 * NB: e
 */
const storeConfig: IStoreConfig = {
  reducerEncryptionWhitelist: ['auth'], // these reducers wil be ecrypted (if they are in `reducerPersistWhitelist`) before being persisted
  reducerPersistWhitelist: ['auth', 'counter'], // these reducers will be persisted
};

export default storeConfig;
