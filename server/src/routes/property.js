import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import { propertyController } from '../controller/index.js';
import { verifyToken } from '../middleware/auth.js';

const propertyRouter = Router();
propertyRouter.get(
  '/:zpid',
  verifyToken,
  asyncWrap(propertyController.getPropertyDetails)
);

export default propertyRouter;
