/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {
  getPropertyAsync,
  getCompareAsync,
  getWalkAndTransitScoreAsync,
} from './thunks';

const INITIAL_STATE = {
  property: {},
  walkAndTransitScore: {},
  compare: [],
  getProperty: REQUEST_STATE.IDLE,
  getWalkAndTransitScore: REQUEST_STATE.IDLE,
  getCompare: REQUEST_STATE.IDLE,
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
      })
      .addCase(getWalkAndTransitScoreAsync.pending, state => {
        state.getWalkAndTransitScore = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getWalkAndTransitScoreAsync.fulfilled, (state, action) => {
        state.getWalkAndTransitScore = REQUEST_STATE.FULFILLED;
        state.walkAndTransitScore = action.payload;
      })
      .addCase(getWalkAndTransitScoreAsync.rejected, (state, action) => {
        state.getWalkAndTransitScore = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getCompareAsync.pending, state => {
        state.getCompare = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getCompareAsync.fulfilled, (state, action) => {
        state.getCompare = REQUEST_STATE.FULFILLED;
        state.compare = action.payload;
      })
      .addCase(getCompareAsync.rejected, (state, action) => {
        state.getCompare = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default propertySlice.reducer;
