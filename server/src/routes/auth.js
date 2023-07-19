import passport from 'passport';
import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import { authController } from '../controller/index.js';
import {
  isLoggedIn,
  isNotLoggedIn,
  googleCallback,
} from '../middleware/auth.js';

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
authRouter.post('/logout/google', asyncWrap(authController.googleLogout));

export default authRouter;
