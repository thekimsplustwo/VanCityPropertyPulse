import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import homeReducer from './home/reducer';
import propertyReducer from './property/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    home: homeReducer,
    property: propertyReducer,
  },
  devTools: true,
});
