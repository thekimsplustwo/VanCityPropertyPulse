import { Router } from 'express';
import asyncWrap from '../utils/async-wrap.js';
import * as homeController from '../controller/home.js';

import { verifyToken } from '../middleware/auth.js';

const homeRouter = Router();
homeRouter.get('/', verifyToken, asyncWrap(homeController.getList));

export default homeRouter;
