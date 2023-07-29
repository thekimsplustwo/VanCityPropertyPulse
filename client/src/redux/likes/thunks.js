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
    const response = await LikesService.addLikes(property, token);

    // Fetch likes again after successfully adding a like
    // thunkAPI.dispatch(getLikesAsync());

    return response[response.length - 1];
  }
);

export const deleteLikesAsync = createAsyncThunk(
  actionTypes.DELETE_LIKES,
  async ({ zpid, token }) => {
    await LikesService.deleteLikes(zpid, token);
    return zpid;
  }
);

export const deleteAllLikesAsync = createAsyncThunk(
  actionTypes.DELETE_ALL_LIKES,
  async token => {
    const response = await LikesService.deleteAllLikes(token);

    // This might not be necessary
    // thunkAPI.dispatch(getLikesAsync());

    return response; // if your backend returns the updated list of likes
  }
);
