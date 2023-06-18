/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { loginAsync, signupAsync, getUserAsync } from './thunks';

const INITIAL_STATE = {
  list: [],
  getUser: REQUEST_STATE.IDLE,
  login: REQUEST_STATE.IDLE,
  signup: REQUEST_STATE.IDLE,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserAsync.pending, state => {
        state.getUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.getUser = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.getUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(loginAsync.pending, state => {
        state.login = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.login = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.login = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(signupAsync.pending, state => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default usersSlice.reducer;
