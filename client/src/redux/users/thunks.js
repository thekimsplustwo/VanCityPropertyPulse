import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUserAsync = createAsyncThunk(
  actionTypes.GET_USER,
  async email => {
    return UserService.getUser(email);
  }
);

export const loginAsync = createAsyncThunk(actionTypes.LOGIN, async email => {
  return UserService.login({ email });
});

export const signupAsync = createAsyncThunk(actionTypes.SIGNUP, async email => {
  return UserService.signup({ email });
});

export const editProfileAsync = createAsyncThunk(
  actionTypes.EDIT_PROFILE,
  async (email, region) => {
    return UserService.editProfile(email, region);
  }
);
