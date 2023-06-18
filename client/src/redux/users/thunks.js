import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUsersAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return UserService.getUsers();
  }
);

export const addUserAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async name => {
    return UserService.addUser({ name });
  }
);
