import dotenv from 'dotenv';
import * as model from '../models/index.js';
import { errorGenerator, ERROR_TYPE } from '../utils/error.js';

dotenv.config();

const { MOCK } = process.env;

const userModel = MOCK === true ? model.mockUserModel : model.userModel;

const getUserInfoByEmail = async email => {
  const user = await userModel.findUserByEmail(email);
  if (!user) {
    errorGenerator(ERROR_TYPE.USER_NOT_EXIST);
  }
  return user;
};

const findUserByEmailAndUpdate = async (email, updatedInfo) => {
  const updatedUser = await userModel.findUserByEmailAndUpdate(
    email,
    updatedInfo
  );
  return updatedUser;
};

export { getUserInfoByEmail, findUserByEmailAndUpdate };
