import Like from '../schemas/likes.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getCompareProperties = async (email, items) => {
  const zpids = Array.isArray(items) ? items : items.split(',');
  const res = await Like.aggregate([
    { $match: { email: email } },
    { $unwind: '$properties' },
    { $match: { 'properties.zpid': { $in: zpids } } },
    { $project: { _id: 0, properties: 1 } },
  ]);
  return res.map(item => item.properties);
};

export { getCompareProperties };
