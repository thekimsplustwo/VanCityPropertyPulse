import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import LikesService from './service';

export const getLikesAsync = createAsyncThunk(
  actionTypes.GET_LIKES,
  async () => {
    return LikesService.getLikes();
  }
);

export const addLikesAsync = createAsyncThunk(
  actionTypes.ADD_LIKES,
  async zpid => {
    return LikesService.addLikes(zpid);
  }
);

export const deleteLikesAsync = createAsyncThunk(
  actionTypes.DELETE_LIKES,
  async zpid => {
    return LikesService.deleteLikes(zpid);
  }
);
