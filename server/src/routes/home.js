import { Router } from 'express';
import asyncWrap from '../async-wrap.js';
import * as homeController from '../controller/home.js';

import { verifyToken } from '../middleware/auth.js';

const homeRouter = Router();
homeRouter.get('/', asyncWrap(homeController.getList));

//homeRouter.get('/', verifyToken, asyncWrap(homeController.getList));

export default homeRouter;
