import express from 'express';
import homeRouter from './home.js';
import propertyRouter from './property.js';
import userRouter from './user.js';
import likesRouter from './likes.js';

const router = express.Router();

router.use('/home', homeRouter);
router.use('/properties', propertyRouter);
router.use('/users', userRouter);
router.use('/likes', likesRouter);

export default router;
