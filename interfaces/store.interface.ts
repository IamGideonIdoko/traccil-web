import store, { rootReducer } from '../store/store';
import type { Token, Worker, Admin, Client } from '../graphql/generated-apollo';

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;

// Infer the `RootReducer` type from the rootReducer defined above
export type RootReducer = typeof rootReducer;

export type User = Worker | Admin | Client;

export type UserType = 'client' | 'worker' | 'admin';

// auth slice
export interface AuthState {
  userInfo: User | null;
  userType: UserType | null;
  token: Token | null;
  isAuthenticated: boolean;
}
