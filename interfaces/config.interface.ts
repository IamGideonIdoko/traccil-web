export interface IConstants {
  beHost: string;
  graphqlBaseUrl: string;
  reduxStorePersistenceKey: string;
  reduxStoreSecretKey: string;
}

export interface IStoreConfig {
  reducerEncryptionWhitelist: string[];
  reducerPersistWhitelist: string[];
}
