import dotenv from 'dotenv';
import * as model from '../models/index.js';

dotenv.config();

const { MOCK } = process.env;

//const homeModel = MOCK ? model.mockHomeModel : model.homeModel;
const { homeModel } = model;

const getList = async (filter, sort) => {
  return homeModel.getList(filter, sort);
};

export { getList };
