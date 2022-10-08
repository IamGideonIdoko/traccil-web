import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slice/counter.slice';
import usertypeSlice from './slice/usertype.slice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { loadState } from '../helper';

export const rootReducer = combineReducers({
  counter: counterReducer,
  usertype: usertypeSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  //   preloadedState: loadState(), // called to load state on render
});

export const wrapper = createWrapper(() => store);

export default store;
