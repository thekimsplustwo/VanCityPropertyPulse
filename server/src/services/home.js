import dotenv from 'dotenv';
import * as model from '../models/index.js';

dotenv.config();

const { MOCK } = process.env;

const homeModel = MOCK ? model.mockHomeModel : model.homeModel;

const getList = async () => {
  return homeModel.getList();
};

export { getList };
