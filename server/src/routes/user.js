import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';
import User from '../schemas/users.js';

dotenv.config();

const { FRONT_REDIRECT_URL } = process.env;

const userRouter = Router();

// userRouter.put('/', asyncWrap(userController.updateUserInfo));
// userRouter.get('/', asyncWrap(userController.getUser));
// userRouter.post('/', asyncWrap(userController.signup));

// userRouter.get('/', asyncWrap(userController.login));

userRouter.get('/', verifyToken, asyncWrap(userController.getUser));
userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
userRouter.post('/', asyncWrap(userController.signup));

// userRouter.get('/', verifyToken, asyncWrap(userController.login));

userRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

userRouter.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/google' }),
  (req, res) => {
    const { accessToken } = req.authInfo;
    console.log('Access Token: ', accessToken);
    console.log('req.session after logging in: ', req.session);
    // next();
    // res.redirect(`${FRONT_REDIRECT_URL}/mypage?access_token=${accessToken}`);
    res.cookie('accessToken', accessToken, { httpOnly: true, secure: true });
    res.redirect(`${FRONT_REDIRECT_URL}/mypage`);
  }
);

userRouter.post('/logout', (req, res, next) => {
  console.log('req.session before destroying: ', req.session);
  req.session.destroy(async err => {
    if (err) {
      console.error('Error destroying session:', err);
      return next(err);
    }
    console.log('req.session after destroying: ', req.session);
    await res.json({ message: 'Logout successful' });
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
