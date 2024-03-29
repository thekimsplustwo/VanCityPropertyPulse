import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import HomeService from './service';

export const getListAsync = createAsyncThunk(
  actionTypes.GET_LIST,
  async ({ params, token }) => {
    return HomeService.getList(params, token);
  }
);
