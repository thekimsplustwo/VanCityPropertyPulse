import dotenv from 'dotenv';
import { userService } from '../services/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const getUserInfoByEmail = async (req, res) => {
  //const { email, source } = req.user;
  // if (!email) {
  //   errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  // }
  // const user = await userService.getUserInfoByEmail(email, source);
  return res.status(200).json(req.user);
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
