import dotenv from 'dotenv';
import * as userService from '../services/user.js';
// import { users } from '../data/data.js';

dotenv.config();
// const { FRONT_REDIRECT_URL } = process.env;

const signup = async (req, res) => {
  const userInfo = req.body;
  await userService.signup(userInfo);
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
  const email = req.token;
  const user = await userService.getUserInfoByEmail(email);
  return res.status(201).json(user);
};

const updateUserInfo = async (req, res) => {
  try {
    const { email } = req.body;
    const updatedInfo = req.body;
    const updatedUser = await userService.findByEmailAndUpdate(
      email,
      updatedInfo
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update user info.' });
  }
};

const userLoggedIn = async (req, res) => {
  if (req.session.passport) {
    return req.user.email;
  }
  return null;
};

export { signup, login, logout, updateUserInfo, getUser, userLoggedIn };
