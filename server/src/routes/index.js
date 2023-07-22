import express from 'express';
import homeRouter from './home.js';
import propertyRouter from './property.js';
import userRouter from './user.js';
import likesRouter from './likes.js';
import compareRouter from './compare.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/home', homeRouter);
router.use('/properties', propertyRouter);
router.use('/users', userRouter);
router.use('/likes', likesRouter);
router.use('/compare', compareRouter);
router.use('/auth', authRouter);

export default router;
