/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';

const INITIAL_STATE = {
  location: '',
  minPrice: '',
  maxPrice: '',
  bedsMin: '',
  home_type: [],
  page: 1,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setMin: (state, action) => {
      state.minPrice = action.payload;
    },
    setMax: (state, action) => {
      state.maxPrice = action.payload;
    },
    setBed: (state, action) => {
      state.bedsMin = action.payload;
    },
    setHomeType: (state, action) => {
      state.home_type = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchParams: (state, action) => {
      state.location = action.payload.location;
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.bedsMin = action.payload.bedsMin;
      state.home_type = action.payload.home_type;
      state.page = action.payload.page;
    },
  },
});

export const {
  setLocation,
  setMin,
  setMax,
  setBed,
  setHomeType,
  setPage,
  setSearchParams,
} = searchSlice.actions;

export default searchSlice.reducer;
