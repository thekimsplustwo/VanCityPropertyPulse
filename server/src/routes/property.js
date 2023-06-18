import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import { propertyController } from '../controller/index.js';
import { verifyToken } from '../middleware/auth.js';

const homeRouter = Router();
homeRouter.get('/:zpid', asyncWrap(propertyController.getPropertyDetails));

export default homeRouter;
