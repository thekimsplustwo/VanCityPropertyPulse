/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getListAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getList: REQUEST_STATE.IDLE,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getListAsync.pending, state => {
        state.getList = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getListAsync.fulfilled, (state, action) => {
        state.getList = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getListAsync.rejected, (state, action) => {
        state.getList = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export const { setPage } = homeSlice.actions;

export default homeSlice.reducer;
