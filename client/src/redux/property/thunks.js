import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PropertyService from './service';

export const getPropertyAsync = createAsyncThunk(
  actionTypes.GET_PROPERTY,
  async zpid => {
    return PropertyService.getProperty(zpid);
  }
);

export const getWalkAndTransitScoreAsync = createAsyncThunk(
  actionTypes.GET_WALKSCORE,
  async zpid => {
    return PropertyService.getWalkAndTransitScore(zpid);
  }
);
