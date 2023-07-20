import { compareModel } from '../models/index.js';

const getCompareProperties = async (email, items) => {
  return compareModel.getCompareProperties(email, items);
};

export { getCompareProperties };
