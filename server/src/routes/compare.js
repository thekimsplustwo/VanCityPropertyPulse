import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import { verifyToken } from '../middleware/auth.js';
import { compareController } from '../controller/index.js';

const compareRouter = Router();
compareRouter.get(
  '/',
  verifyToken,
  asyncWrap(compareController.getCompareProperties)
);

export default compareRouter;
