import express from 'express';
import homeRouter from './home.js';
import propertyRouter from './property.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/home', homeRouter);
router.use('/properties', propertyRouter);
router.use('/users', userRouter);

export default router;
