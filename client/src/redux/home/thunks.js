import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import HomeService from './service';

export const getListAsync = createAsyncThunk(
  actionTypes.GET_LIST,
  async params => {
    return HomeService.getList(params);
  }
);

export const getPaginatedListAsync = createAsyncThunk(
  actionTypes.GET_PAGINATED_LIST,
  async page => {
    return HomeService.getPaginatedList(page);
  }
);
