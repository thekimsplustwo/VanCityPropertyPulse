import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import { verifyToken } from '../middleware/auth.js';
import { likesController } from '../controller/index.js';

const likesRouter = Router();
likesRouter.get('/', verifyToken, asyncWrap(likesController.getLikes));
likesRouter.post('/', verifyToken, asyncWrap(likesController.addLikes));
likesRouter.delete(
  '/:zpid',
  verifyToken,
  asyncWrap(likesController.removeLikes)
);

export default likesRouter;
