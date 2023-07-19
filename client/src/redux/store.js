import { createStore, applyMiddleware } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import usersReducer from './users/reducer';
import homeReducer from './home/reducer';
import propertyReducer from './property/reducer';
import likesReducer from './likes/reducer';
import searchReducer from './search/reducer';

const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  whitelist: ['users', 'home', 'likes', 'property'], // target (reducer name)
};

const rootReducer = combineReducers({
  users: usersReducer,
  search: searchReducer,
  home: homeReducer,
  property: propertyReducer,
  likes: likesReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const getStore = () => {
  const store = configureStore({
    reducer: persistedReducer, // used persistedReducer here
    middleware: [thunk],
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
