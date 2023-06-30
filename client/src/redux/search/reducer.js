/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';

const INITIAL_STATE = {
  location: '',
  min: '',
  max: '',
  bed: '',
  homeType: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setMin: (state, action) => {
      state.min = action.payload;
    },
    setMax: (state, action) => {
      state.max = action.payload;
    },
    setBed: (state, action) => {
      state.bed = action.payload;
    },
    setHomeType: (state, action) => {
      state.homeType = action.payload;
    },
  },
});

export const { setLocation, setMin, setMax, setBed, setHomeType } =
  searchSlice.actions;

export default searchSlice.reducer;
