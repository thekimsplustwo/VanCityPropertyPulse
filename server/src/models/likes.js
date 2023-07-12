import Like from '../schemas/likes.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getLikes = async email => {
  const defaultSort = { createdAt: 'asc' };
  const res = await Like.findOne({ email: email }).sort(defaultSort).exec();
  console.log('list ', res);
  return res.properties;
};
const addLikes = async (email, newLike) => {
  const res = await Like.findOneAndUpdate(
    {
      email: email,
      'properties.zpid': { $ne: newLike.zpid },
    },
    {
      $push: { properties: newLike },
      $setOnInsert: { email: email },
    },
    {
      returnDocument: 'after',
      returnOriginal: false,
      upsert: true,
    }
  );
  return res || errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

const removeLikes = async (email, zpid) => {
  const res = await Like.updateOne(
    { email: email },
    { $pull: { properties: { zpid: zpid } } }
  ).exec();
  console.log('res ', res);
  if (!res.modifiedCount) {
    throw errorGenerator(ERROR_TYPE.PROPERTY_NOT_FOUND);
  }

  return res;
};

const removeAllLikes = async email => {
  const res = await Like.findOneAndDelete({ email: email });
  console.log('res ', res);
  return res.acknowledged
    ? res.deletedCount
    : errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

export { getLikes, addLikes, removeLikes, removeAllLikes };
