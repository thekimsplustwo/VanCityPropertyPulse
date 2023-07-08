import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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

export const googleLoginAsync = createAsyncThunk(
  actionTypes.GOOGLE_LOGIN,
  async () => {
    return UserService.googleLogin();
  }
);

export const logoutAsync = createAsyncThunk(actionTypes.LOGOUT, async token => {
  UserService.logout(token);
});

export const signupAsync = createAsyncThunk(actionTypes.SIGNUP, async email => {
  return UserService.signup({ email });
});

export const editProfileAsync = createAsyncThunk(
  actionTypes.EDIT_PROFILE,
  async formData => {
    return UserService.editProfile(formData);
  }
);
