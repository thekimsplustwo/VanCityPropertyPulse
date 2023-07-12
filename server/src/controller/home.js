import dotenv from 'dotenv';
import { homeService } from '../services/index.js';

const trimSortOpt = rawSort => {
  const [sortType, sortOpt] = rawSort?.split('_') ?? [];
  return sortOpt ? { [sortType]: sortOpt } : undefined;
};

const getList = async (req, res) => {
  const { user } = req;
  const filter = req.query;
  const list = await homeService.getList(filter);
  return res.status(201).json(list);
};

export { getList };
