import dotenv from 'dotenv';
import { Router } from 'express';
import asyncWrap from '../utils/async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';

dotenv.config();

const userRouter = Router();

userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
userRouter.get(
  '/profile',
  verifyToken,
  asyncWrap(userController.getUserInfoByEmail)
);

export default userRouter;
