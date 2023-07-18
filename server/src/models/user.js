import * as data from '../data/data.js';
import User from '../schemas/users.js';

const { users } = data;

const getUserInfo = async emailAddress => {
  //
};

const signup = async userInfo => {
  const newUser = User.create(userInfo);
  return newUser;
};

const login = async emailAddress => {
  //
};

const logout = async () => {
  //
};

const findByEmail = async email => {
  return User.findOne({ email });
};

const updateUser = async (email, updatedInfo) => {
  //
};

const findByEmailAndUpdate = async (email, updatedInfo) => {
  const updatedUser = await User.findOneAndUpdate({ email }, updatedInfo);
  return updatedUser;
};

export {
  getUserInfo,
  login,
  logout,
  findByEmail,
  updateUser,
  findByEmailAndUpdate,
};
