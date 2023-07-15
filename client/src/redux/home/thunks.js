import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import HomeService from './service';

export const getListAsync = createAsyncThunk(
  actionTypes.GET_LIST,
  async params => {
    return HomeService.getList(params);
  }
);

export const getPageAsync = createAsyncThunk(
  actionTypes.GET_PAGE,
  async pageNumber => {
    return HomeService.getPage(pageNumber);
  }
);
