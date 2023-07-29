import { Router } from 'express';
import asyncWrap from '../utils/async-wrap.js';
import { propertyController } from '../controller/index.js';
import { verifyToken } from '../middleware/auth.js';

const propertyRouter = Router();
propertyRouter.get(
  '/:zpid',
  verifyToken,
  asyncWrap(propertyController.getPropertyDetails)
);
propertyRouter.get(
  '/:zpid/walkscore',
  verifyToken,
  asyncWrap(propertyController.getPropertyWalkScore)
);
export default propertyRouter;
