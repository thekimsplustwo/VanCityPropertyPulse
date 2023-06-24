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
const { SECRET_KEY } = process.env;

dotenv.config();

const userModel = MOCK ? model.mockUserModel : model.userModel;

const salt = bcrypt.genSaltSync();
const tokenObj = {
  token: '',
};

const doesUserExist = async email => {
  const user = await userModel.getUserInfoByEmail(email);
  return user;
};

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isInputValid = () => {
  //
};

const createToken = async userId => {
  try {
    const token = jwt.sign({ id: userId }, SECRET_KEY, {
      expiresIn: '24h',
    });
    return token;
  } catch (err) {
    const msg = 'CREATE_TOKEN_FAILED';
    const error = new Error(msg, 400);
    throw error;
  }
};

const getUserInfoByEmail = async email => {
  // if (!validateEmail(email)) {
  //   errorGenerator({ message: errorType.INVALID_EMAIL, statusCode: 404 });
  // }
  const user = await userModel.findByEmail(email);
  if (!user) {
    errorGenerator({ message: ERROR_TYPE.USER_NOT_EXIST, statusCode: 404 });
  }
  return user;
};

const signup = async userInfo => {
  //
};

const login = async userInfo => {
  const user = await getUserInfoByEmail(userInfo.email);
  if (MOCK) {
    return user;
  }
  return true;
};

const terminateToken = async () => {
  //
};

const findByEmailAndUpdate = async (email, updatedInfo) => {
  return userModel.updateItem(email, updatedInfo);
};

export { getUserInfoByEmail, signup, login, findByEmailAndUpdate };
