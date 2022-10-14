import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Token } from '../../graphql/generated-apollo';
import type { AuthState } from '../../interfaces/store.interface';

// Define the initial state using that type
const initialState: AuthState = {
  userInfo: null,
  userType: null,
  token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<Required<Omit<AuthState, 'isAuthenticated'>>>) => {
      state.userInfo = action.payload.userInfo;
      state.userType = action.payload.userType;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.userInfo = null;
      state.userType = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateToken: (state, action: PayloadAction<Token>) => {
      state.token = action.payload;
    },
  },
});

// export redux actions
export const { loginUser, logoutUser, updateToken } = authSlice.actions;

// export redux reducer
export default authSlice.reducer;
