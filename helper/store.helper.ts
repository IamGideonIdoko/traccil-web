import type { PreloadedState } from '@reduxjs/toolkit';
import SimpleCrypto from 'simple-crypto-js';
import type { PlainData } from 'simple-crypto-js';
import { debounce } from 'debounce';
import constants from '../config/constants.config';
import type { RootReducer, RootState } from '../interfaces/store.interface';
import store from '../store/store';
import { isServer } from './general.helper';
import storeConfig from '../config/store.config';

const simpleCrypto = new SimpleCrypto(constants.reduxStoreSecretKey);

const encryptState = (plainState: RootState): string | null => {
  try {
    const cipherState = simpleCrypto.encrypt(plainState);
    return cipherState;
  } catch (e) {
    return null;
  }
};

const decryptState = (cipherState: string): PlainData | null => {
  try {
    const plainState = simpleCrypto.decrypt(cipherState);
    return plainState;
  } catch (e) {
    return null;
  }
};

export const loadState = (): PreloadedState<RootReducer> => {
  const persistedState = !isServer && localStorage.getItem(constants.reduxStorePersistenceKey);
  if (!persistedState) return {};
  try {
    // decrypt all encrypted reducers
    const persistedStateWithoutEncryption = Object.fromEntries(
      Object.entries((JSON.parse(persistedState) as Partial<RootReducer>) ?? {}).map((item) => {
        if (storeConfig.reducerEncryptionWhitelist.indexOf(item[0]) !== -1) {
          return [item[0], decryptState(item[1] as unknown as string) ?? {}];
        }
        return item;
      }),
    );
    return persistedStateWithoutEncryption as PreloadedState<RootReducer>;
  } catch (e) {
    console.error('Could not parse state from local storage on load');
    return {};
  }
};

const saveState = () => {
  const stateToPersist = Object.fromEntries(
    Object.entries(store.getState())
      // reducers not on persist whitelist should not be persisted
      .filter((item) => storeConfig.reducerPersistWhitelist.indexOf(item[0]) !== -1)
      // reducers on encrypt whitelist should be persisted
      .map((item) => {
        if (storeConfig.reducerEncryptionWhitelist.indexOf(item[0]) !== -1) {
          return [item[0], encryptState(item[1])];
        }
        return item;
      }),
  ) as Partial<RootReducer>;

  if (stateToPersist && !isServer)
    localStorage.setItem(constants.reduxStorePersistenceKey, JSON.stringify(stateToPersist));
};

/**
 * subscribe to store changes
 */
export const subscribeToState = () => {
  // save state initially
  saveState();
  store.subscribe(
    // save state after store change
    debounce(() => saveState(), 800),
  );
};
