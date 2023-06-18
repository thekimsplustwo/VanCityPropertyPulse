import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUserAsync = createAsyncThunk(
  actionTypes.GET_USER,
  async email => {
    return UserService.getUser(email);
  }
);

export const loginAsync = createAsyncThunk(actionTypes.LOGIN, async () => {
  return UserService.login();
});

export const signupAsync = createAsyncThunk(actionTypes.SIGNUP, async email => {
  return UserService.signup({ email });
});
