import type { PreloadedState } from '@reduxjs/toolkit';
import SimpleCrypto from 'simple-crypto-js';
import type { PlainData } from 'simple-crypto-js';
import { debounce } from 'debounce';
import constants from '../config/constants.config';
import type { RootReducer, RootState } from '../interfaces/store.interface';
import store from '../store/store';
import { isServer } from './general.helper';

const simpleCrypto = new SimpleCrypto(constants.reduxStoreSecretKey);

const encryptStore = (plainState: RootState): string | null => {
  try {
    const cipherState = simpleCrypto.encrypt(plainState);
    return cipherState;
  } catch (e) {
    return null;
  }
};

const decryptStore = (cipherState: string): PlainData | null => {
  try {
    const plainState = simpleCrypto.decrypt(cipherState);
    return plainState;
  } catch (e) {
    return null;
  }
};

export const loadState = (): PreloadedState<RootReducer> => {
  console.log('called load store');
  const cipherState = !isServer && localStorage.getItem(constants.reduxStorePersistenceKey);
  if (!cipherState) return {};
  const plainState = decryptStore(cipherState);
  if (!plainState) return {};
  return plainState as PreloadedState<RootReducer>;
};

const saveState = () => {
  const cipherState = encryptStore(store.getState());
  console.log('cipherState => ', cipherState);
  if (cipherState && !isServer) localStorage.setItem(constants.reduxStorePersistenceKey, cipherState);
};

/**
 * subscribe to store changes
 */
export const subscribeToState = () => {
  console.log('called store subscribe!');
  // save state initially
  // saveState();
  store.subscribe(
    // save state after store change
    debounce(() => saveState(), 800),
  );
};
