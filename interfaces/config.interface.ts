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

export interface IEnvConfig {
  port: number;
  environment: string;
  isProduction: boolean;
  isDevelopment: boolean;
  isTest: boolean;
}
