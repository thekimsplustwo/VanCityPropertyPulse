import dotenv from 'dotenv';
import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import * as authController from '../controller/auth.js';
import { verifyToken } from '../middleware/auth.js';
import User from '../schemas/users.js';

dotenv.config();

const { FRONT_REDIRECT_URL } = process.env;

const authRouter = Router();

authRouter.get('/google', asyncWrap(authController.google));
authRouter.get('/google/callback', asyncWrap(authController.callback));

export default authRouter;
