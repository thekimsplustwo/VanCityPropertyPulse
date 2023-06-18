import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
});
