/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getListAsync, getPageAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  page: 1,
  getList: REQUEST_STATE.IDLE,
  getPage: REQUEST_STATE.IDLE,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {},
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
      })
      .addCase(getPageAsync.pending, state => {
        state.getPage = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getPageAsync.fulfilled, (state, action) => {
        state.getPage = REQUEST_STATE.FULFILLED;
        state.page = action.payload;
      })
      .addCase(getPageAsync.rejected, (state, action) => {
        state.getPage = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default homeSlice.reducer;
