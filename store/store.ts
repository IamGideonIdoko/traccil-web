import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './slice/counter.slice';
import authReducer from './slice/auth.slice';
import { loadState } from '../helper/store.helper';

export const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  preloadedState: loadState(), // called to load state on render
});

export const wrapper = createWrapper(() => store);

export default store;
