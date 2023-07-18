import * as data from '../data/data.js';
import User from '../schemas/users.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const { users } = data;

const findUserByEmail = async email => {
  const user = await User.findOne({ email });
  return user || errorGenerator(ERROR_TYPE.USER_NOT_EXIST);
};

const findUserByEmailAndUpdate = async (email, updatedInfo) => {
  const updatedUser = await User.findOneAndUpdate({ email }, updatedInfo);
  return updatedUser || errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

export { findUserByEmail, findUserByEmailAndUpdate };
