import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './slice/counter.slice';
import authReducer from './slice/auth.slice';
import { loadState } from '../helper/store.helper';
import envConfig from '../config/environment.config';

export const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: !envConfig.isProduction,
  middleware: [thunk],
  preloadedState: loadState(), // called to load state on render
});

export const wrapper = createWrapper(() => store);

export default store;
