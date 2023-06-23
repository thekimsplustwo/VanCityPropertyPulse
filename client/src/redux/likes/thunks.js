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
  async (property, thunkAPI) => {
    const response = await LikesService.addLikes(property);

    // Fetch likes again after successfully adding a like
    thunkAPI.dispatch(getLikesAsync());

    // return response;
  }
);

export const deleteLikesAsync = createAsyncThunk(
  actionTypes.DELETE_LIKES,
  async (zpid, thunkAPI) => {
    const response = await LikesService.deleteLikes(zpid);

    // Fetch likes again after successfully deleting a like
    thunkAPI.dispatch(getLikesAsync());

    return response;
  }
);
