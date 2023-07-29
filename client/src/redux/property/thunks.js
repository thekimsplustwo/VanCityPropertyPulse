import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PropertyService from './service';

export const getPropertyAsync = createAsyncThunk(
  actionTypes.GET_PROPERTY,
  async ({ zpid, token }) => {
    return PropertyService.getProperty(zpid, token);
  }
);

export const getWalkAndTransitScoreAsync = createAsyncThunk(
  actionTypes.GET_WALKSCORE,
  async ({ zpid, token }) => {
    return PropertyService.getWalkAndTransitScore(zpid, token);
  }
);
