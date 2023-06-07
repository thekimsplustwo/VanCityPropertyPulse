import express from 'express';
import Main from './Main';

const router = express.Router();

router.use('/', Main);

export default router;
