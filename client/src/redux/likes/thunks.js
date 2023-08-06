import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import LikesService from './service';

export const getLikesAsync = createAsyncThunk(
  actionTypes.GET_LIKES,
  async token => {
    return LikesService.getLikes(token);
  }
);

export const addLikesAsync = createAsyncThunk(
  actionTypes.ADD_LIKES,
  async ({ property, token }) => {
    return LikesService.addLikes(property, token);
  }
);

export const deleteLikesAsync = createAsyncThunk(
  actionTypes.DELETE_LIKES,
  async ({ zpid, token }) => {
    return LikesService.deleteLikes(zpid, token);
  }
);

export const deleteAllLikesAsync = createAsyncThunk(
  actionTypes.DELETE_ALL_LIKES,
  async token => {
    return LikesService.deleteAllLikes(token);
  }
);
