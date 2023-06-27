import dotenv from 'dotenv';
import * as userService from '../services/user.js';
import { users } from '../data/data.js';

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

const logout = async (req, res) => {
  // const userInfo = req.body;
  await userService.logout();
  return res.status(200).json({ message: 'Logout successful' });
};

const getUser = async (req, res) => {
  const { user } = req;
  return res.status(201).json(user);
};

const updateUserInfo = async (req, res) => {
  // const { user } = req;
  // const updated = await userService.getUserInfoByEmail(user.email);
  // return res.status(201).json(updated);
  try {
    const { user } = req;
    const updatedInfo = req.body;
    const updatedUser = await userService.findByEmailAndUpdate(
      user.email,
      updatedInfo
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update user info.' });
  }
};

export { signup, login, logout, updateUserInfo, getUser };
