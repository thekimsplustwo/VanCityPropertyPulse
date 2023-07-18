import dotenv from 'dotenv';
import * as userService from '../services/user.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const getUserInfoByEmail = async (req, res) => {
  const { email } = req.user;
  const user = await userService.getUserInfoByEmail(email);
  return res.status(201).json(user);
};

const updateUserInfo = async (req, res) => {
  const { email } = req.user;
  const updatedInfo = req.body;
  if (!updateUserInfo) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  const updatedUser = await userService.findUserByEmailAndUpdate(
    email,
    updatedInfo
  );
  return res.status(200).json(updatedUser);
};

export { updateUserInfo, getUserInfoByEmail };
