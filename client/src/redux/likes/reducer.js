/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {
  addLikesAsync,
  deleteLikesAsync,
  getLikesAsync,
  deleteAllLikesAsync,
} from './thunks';

const INITIAL_STATE = {
  list: [],
  getLikes: REQUEST_STATE.IDLE,
  addLikes: REQUEST_STATE.IDLE,
  deleteLikes: REQUEST_STATE.IDLE,
  deleteAllLikes: REQUEST_STATE.IDLE,
  error: null,
};

const likesSlice = createSlice({
  name: 'likes',
  initialState: INITIAL_STATE,
  reducers: {
    resetLikesState: () => INITIAL_STATE,
  },
  extraReducers: builder => {
    builder
      .addCase(getLikesAsync.pending, state => {
        state.getLikes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getLikesAsync.fulfilled, (state, action) => {
        state.getLikes = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getLikesAsync.rejected, (state, action) => {
        state.getLikes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addLikesAsync.pending, state => {
        state.addLikes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addLikesAsync.fulfilled, (state, action) => {
        state.addLikes = REQUEST_STATE.FULFILLED;
        // state.list = action.payload;
        state.list = [...state.list, action.payload];
      })
      .addCase(addLikesAsync.rejected, (state, action) => {
        state.addLikes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deleteLikesAsync.pending, state => {
        state.deleteLikes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteLikesAsync.fulfilled, (state, action) => {
        state.deleteLikes = REQUEST_STATE.FULFILLED;
        // state.list = action.payload;
        state.list = state.list.filter(
          property => property.zpid !== action.payload
        );
      })
      .addCase(deleteLikesAsync.rejected, (state, action) => {
        state.deleteLikes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(deleteAllLikesAsync.pending, state => {
        state.deleteAllLikes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteAllLikesAsync.fulfilled, (state, action) => {
        state.deleteAllLikes = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(deleteAllLikesAsync.rejected, (state, action) => {
        state.deleteAllLikes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export const { resetLikesState } = likesSlice.actions;
export default likesSlice.reducer;
