import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';

import { verifyToken } from '../middleware/auth.js';

const userRouter = Router();

userRouter.put('/', asyncWrap(userController.updateUserInfo));
userRouter.get('/', asyncWrap(userController.login));
userRouter.post('/', asyncWrap(userController.signup));

// userRouter.put('/', verifyToken, asyncWrap(userController.updateUserInfo));
// userRouter.get('/', verifyToken, asyncWrap(userController.login));
// userRouter.post('/', verifyToken, asyncWrap(userController.signup));

export default userRouter;
