import { compareService } from '../services/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getCompareProperties = async (req, res) => {
  const { email } = req.user;
  const { item } = req.query;
  if (!item) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  const list = await compareService.getCompareProperties(email, item);
  return res.status(201).json(list);
};

export { getCompareProperties };
