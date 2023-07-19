import User from '../schemas/users.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getUserInfoByEmail = async (email, _source) => {
  const query = { email: email };
  if (_source) query.source = _source;
  const user = await User.findOne(query);
  return user;
};

const findUserByEmailAndUpdate = async (email, updatedInfo) => {
  const updatedUser = await User.findOneAndUpdate({ email }, updatedInfo, {
    new: true,
  });
  return updatedUser || errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

const signup = async userInfo => {
  const user = await User.create(userInfo);
  return user || errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

export { getUserInfoByEmail, findUserByEmailAndUpdate, signup };
