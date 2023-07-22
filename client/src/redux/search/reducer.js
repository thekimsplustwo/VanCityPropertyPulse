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
  },
});

export const { setLocation, setMin, setMax, setBed, setHomeType, setPage } =
  searchSlice.actions;

export default searchSlice.reducer;
