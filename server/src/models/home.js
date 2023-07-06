import Property from '../schemas/properties.js';
import { errorGenerator, ERROR_TYPE } from '../utils/error.js';

const getList = async (filter, sort) => {
  const defaultSort = { createdAt: 'asc' };
  const res = await Property.find(filter)
    .sort(sort || defaultSort)
    .exec();
  return res;
};

export { getList };
