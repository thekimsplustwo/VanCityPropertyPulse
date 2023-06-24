/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getPropertyAsync } from './thunks';

const INITIAL_STATE = {
  property: {},
  getProperty: REQUEST_STATE.IDLE,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPropertyAsync.pending, state => {
        state.getProperty = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getPropertyAsync.fulfilled, (state, action) => {
        state.getProperty = REQUEST_STATE.FULFILLED;
        state.property = action.payload;
      })
      .addCase(getPropertyAsync.rejected, (state, action) => {
        state.getProperty = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default propertySlice.reducer;
