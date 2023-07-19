/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {
  googleLogoutAsync,
  getUserAsync,
  editProfileAsync,
  googleLoginAsync,
} from './thunks';

const INITIAL_STATE = {
  list: [],
  user: {},
  isLogin: false,
  getUser: REQUEST_STATE.IDLE,
  login: REQUEST_STATE.IDLE,
  logout: REQUEST_STATE.IDLE,
  signup: REQUEST_STATE.IDLE,
  editProfile: REQUEST_STATE.IDLE,
  google: REQUEST_STATE.IDLE,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    resetUserState: () => INITIAL_STATE,
    setLoginStatus: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserAsync.pending, state => {
        state.getUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.getUser = REQUEST_STATE.FULFILLED;
        state.loggedIn = true;
        state.user = action.payload;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.getUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(googleLoginAsync.pending, state => {
        state.google = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(googleLoginAsync.fulfilled, (state, action) => {
        state.google = REQUEST_STATE.FULFILLED;
        state.isLogin = true;
        state.user = action.payload;
      })
      .addCase(googleLoginAsync.rejected, (state, action) => {
        state.google = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(googleLogoutAsync.pending, state => {
        state.logout = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(googleLogoutAsync.fulfilled, (state, action) => {
        state.logout = REQUEST_STATE.FULFILLED;
        state.isLogin = false;
        state.user = {};
      })
      .addCase(googleLogoutAsync.rejected, (state, action) => {
        state.logout = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(editProfileAsync.pending, state => {
        state.editProfile = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editProfileAsync.fulfilled, (state, action) => {
        state.editProfile = REQUEST_STATE.FULFILLED;
        state.user = action.payload;
      })
      .addCase(editProfileAsync.rejected, (state, action) => {
        state.editProfile = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export const { resetUserState, setLoginStatus } = usersSlice.actions;
export default usersSlice.reducer;
