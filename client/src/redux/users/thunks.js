import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUserAsync = createAsyncThunk(actionTypes.GET_USER, async () => {
  return UserService.getUser();
});

export const googleLoginAsync = createAsyncThunk(
  actionTypes.GOOGLE_LOGIN,
  async () => {
    return UserService.googleLogin();
  }
);

export const googleLogoutAsync = createAsyncThunk(
  actionTypes.LOGOUT,
  async () => {
    return UserService.googleLogout();
  }
);

export const editProfileAsync = createAsyncThunk(
  actionTypes.EDIT_PROFILE,
  async formData => {
    return UserService.editProfile(formData);
  }
);
