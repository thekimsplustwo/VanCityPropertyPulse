import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import homeReducer from './home/reducer';
import propertyReducer from './property/reducer';
import likesReducer from './likes/reducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    home: homeReducer,
    property: propertyReducer,
    likes: likesReducer,
  },
  devTools: true,
});
