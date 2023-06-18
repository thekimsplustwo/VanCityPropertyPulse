import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import homeReducer from './home/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    home: homeReducer,
  },
  devTools: true,
});
