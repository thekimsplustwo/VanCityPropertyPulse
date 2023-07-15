import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import { addSeconds } from 'date-fns';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';
import User from '../schemas/users.js';

dotenv.config();

const { FRONT_REDIRECT_URL } = process.env;

const userRouter = Router();

userRouter.get('/', verifyToken, asyncWrap(userController.getUser));
userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
userRouter.post('/', asyncWrap(userController.signup));

userRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email', 'openid'],
    accessType: 'offline',
    prompt: 'consent',
  })
);

userRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/google' }),
  (req, res) => {
    res.cookie('accessToken', req.cookies.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.redirect(`${FRONT_REDIRECT_URL}/mypage`);
  }
);

userRouter.post('/logout', (req, res, next) => {
  req.session.destroy();

  const expirationDate = addSeconds(new Date(), 1);

  res.clearCookie('accessToken');
  res.clearCookie('connect.sid');
  res.cookie('accessToken', '', {
    expires: expirationDate,
    httpOnly: true,
    secure: true,
  });
  res.cookie('connect.sid', '', {
    expires: expirationDate,
    httpOnly: true,
    secure: true,
  });
});

userRouter.get('/profile', async (req, res) => {
  if (req.session.passport) {
    const email = req.session.passport.user;
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } else {
    res.status(400).json();
  }
});

export default userRouter;
