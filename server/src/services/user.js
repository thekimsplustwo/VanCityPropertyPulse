import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import axios from 'axios';
import { sign } from 'crypto';
import dotenv from 'dotenv';
import { error } from 'console';
import * as model from '../models/index.js';
import { errorGenerator, ERROR_TYPE } from '../utils/error.js';

dotenv.config();

const { MOCK } = process.env;

const { userModel } = model;

const getUserInfoByEmail = async email => {
  const user = await userModel.findByEmail(email);
  if (!user) {
    errorGenerator(ERROR_TYPE.USER_NOT_EXIST);
  }
  return user;
};

const signup = async userInfo => {
  return userModel.signup(userInfo);
};

const login = async userInfo => {
  const user = await getUserInfoByEmail(userInfo.email);
  if (MOCK) {
    return user;
  }
  return true;
};

const logout = async () => {
  await userModel.logout();
};

const findByEmailAndUpdate = async (email, updatedInfo) => {
  const updatedUser = await userModel.findByEmailAndUpdate(email, updatedInfo);
  return updatedUser;
};

export { getUserInfoByEmail, signup, login, logout, findByEmailAndUpdate };
