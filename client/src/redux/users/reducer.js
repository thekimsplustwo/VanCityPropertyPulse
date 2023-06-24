/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {
  loginAsync,
  signupAsync,
  getUserAsync,
  editProfileAsync,
} from './thunks';

const INITIAL_STATE = {
  list: [],
  user: {},
  getUser: REQUEST_STATE.IDLE,
  login: REQUEST_STATE.IDLE,
  signup: REQUEST_STATE.IDLE,
  editProfile: REQUEST_STATE.IDLE,
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
        state.user = action.payload;
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
        state.user = action.payload;
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
      })
      .addCase(editProfileAsync.pending, state => {
        state.editProfile = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editProfileAsync.fulfilled, (state, action) => {
        state.editProfile = REQUEST_STATE.FULFILLED;
        state.user = action.payload;
        // state.list.push(action.payload);
        // state.list = state.list.map(user =>
        //   user.email === action.payload.email ? action.payload : user
        // );
      })
      .addCase(editProfileAsync.rejected, (state, action) => {
        state.editProfile = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default usersSlice.reducer;
