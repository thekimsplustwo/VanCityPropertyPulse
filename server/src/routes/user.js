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
// userRouter.get('/', asyncWrap(userController.login));
// userRouter.get('/:email', asyncWrap(userController.getUser));
// userRouter.post('/', asyncWrap(userController.signup));

userRouter.get('/', verifyToken, asyncWrap(userController.getUser));
userRouter.patch('/', verifyToken, asyncWrap(userController.updateUserInfo));
// userRouter.get('/', verifyToken, asyncWrap(userController.login));
userRouter.post('/', asyncWrap(userController.signup));

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

userRouter.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  // res.redirect('http://localhost:3000/login');
});

userRouter.get('/profile', (req, res) => {
  console.log('session: ', req.session.passport);

  if (req.session.passport) {
    res.status(200).json(req.user);
  } else {
    req.status(400).json();
  }
});

export default userRouter;
