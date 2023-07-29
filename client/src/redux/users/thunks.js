import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUserAsync = createAsyncThunk(
  actionTypes.GET_USER,
  async token => {
    return UserService.getUser(token);
  }
);

export const googleLoginAsync = createAsyncThunk(
  actionTypes.GOOGLE_LOGIN,
  async () => {
    return UserService.googleLogin();
  }
);

export const googleLogoutAsync = createAsyncThunk(
  actionTypes.LOGOUT,
  async token => {
    return UserService.googleLogout(token);
  }
);

export const editProfileAsync = createAsyncThunk(
  actionTypes.EDIT_PROFILE,
  async ({ formData, token }) => {
    return UserService.editProfile(formData, token);
  }
);
