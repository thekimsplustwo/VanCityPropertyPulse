import dotenv from 'dotenv';
import * as model from '../models/index.js';
import { errorGenerator, ERROR_TYPE } from '../utils/error.js';

dotenv.config();

const { MOCK } = process.env;

const userModel = MOCK === true ? model.mockUserModel : model.userModel;

const getUserInfoByEmail = async (email, _source) => {
  if (!email) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  const user = await userModel.getUserInfoByEmail(email, _source);
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

const signup = async userInfo => {
  if (!userInfo.email) errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  const res = await userModel.signup(userInfo);
  return res;
};
export { getUserInfoByEmail, findUserByEmailAndUpdate, signup };
