import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import { Router } from 'express';
import asyncWrap from '../async-wrap.js';

import { authController } from '../controller/index.js';
import {
  isLoggedIn,
  isNotLoggedIn,
  googleCallback,
  handleLogout,
} from '../middleware/auth.js';

dotenv.config();

const { FRONT_REDIRECT_URL, SERVER_REDIRECT_URL } = process.env;
const googleOptions = {
  authType: 'request',
  scope: ['email', 'profile'],
  accessType: 'offline',
  prompt: 'consent',
};

const authRouter = Router();

authRouter.get(
  '/login/google',
  isNotLoggedIn,
  passport.authenticate('google', googleOptions)
);

authRouter.get('/google/callback', googleCallback);
authRouter.post(
  '/logout/google',
  isLoggedIn,
  asyncWrap(authController.googleLogout)
);

export default authRouter;
