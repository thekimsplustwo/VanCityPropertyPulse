import dotenv from 'dotenv';
import { compareModel } from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const getCompareProperties = async (email, items) => {
  return compareModel.getCompareProperties(email, items);
};

export { getCompareProperties };
