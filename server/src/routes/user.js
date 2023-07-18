import dotenv from 'dotenv';
import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';

dotenv.config();

const userRouter = Router();

userRouter.get('/', verifyToken, asyncWrap(userController.getUser));
userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
userRouter.post('/', asyncWrap(userController.signup));
userRouter.get('/profile', verifyToken, asyncWrap(userController.getUser));

export default userRouter;
