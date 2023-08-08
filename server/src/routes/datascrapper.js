import { Router } from 'express';
import asyncWrap from '../utils/async-wrap.js';
import { verifyToken } from '../middleware/auth.js';
import { dataScrapController } from '../controller/index.js';

const dataScrapRouter = Router();
dataScrapRouter.get('/', asyncWrap(dataScrapController.datascrapping));
dataScrapRouter.get('/database', asyncWrap(dataScrapController.fromdatabase));

export default dataScrapRouter;
