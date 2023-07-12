import dotenv from 'dotenv';
import { Router } from 'express';
import passport from 'passport';
import cors from 'cors';
import asyncWrap from '../async-wrap.js';
import * as userController from '../controller/user.js';
import { verifyToken } from '../middleware/auth.js';
import { getUserInfoByEmail } from '../services/user.js';

dotenv.config();

const { FRONT_REDIRECT_URL } = process.env;

const userRouter = Router();

userRouter.use(cors());

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
    res.redirect(`${FRONT_REDIRECT_URL}`);
  }
);

userRouter.post('/logout', verifyToken, (req, res, next) => {
  req.session.destroy(async err => {
    if (err) {
      console.error('Error destroying session:', err);
      return next(err);
    }
    await res.json({ message: 'Logout successful' });
  });
});

userRouter.get('/profile', verifyToken, (req, res) => {
  console.log('session: ', req.session);
  console.log('session.passport: ', req.session.passport);

  if (req.session.passport) {
    // res.status(200).json(req.user);
    const user = req.session.passport;
    res.status(200).json(user);
  } else {
    res.status(400).json();
  }
});

export default userRouter;
