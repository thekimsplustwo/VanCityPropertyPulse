import dotenv from 'dotenv';
import * as userService from '../services/user.js';

dotenv.config();
const { FRONT_REDIRECT_URL } = process.env;

const signup = async (req, res) => {
  const userInfo = req.body;
  await userService.signup(userInfo, false);
  return res.status(201).json({ message: 'SIGNUP_SUCCEEDED' });
};

const login = async (req, res) => {
  const userInfo = req.body;
  const token = await userService.login(userInfo);
  return res.status(201).json(token);
};

const getUser = async (req, res) => {
  const { user } = req;
  return res.status(201).json(user);
};

const updateUserInfo = async (req, res) => {
  const { user } = req;
  const updated = await userService.getUserInfoByEmail(user.email);
  return res.status(201).json(updated);
};

export { signup, login, updateUserInfo, getUser };
