import dotenv from 'dotenv';
import { homeService } from '../services/index.js';

dotenv.config();
const { FRONT_REDIRECT_URL } = process.env;

const getList = async (req, res) => {
  const list = await homeService.getList();
  return res.status(201).json(list);
};

export { getList };
