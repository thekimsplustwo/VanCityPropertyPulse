import Like from '../schemas/likes.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

const getLikes = async email => {
  const defaultSort = { createdAt: 'asc' };
  const res = await Like.findOne({ email: email }).sort(defaultSort).exec();
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
  return res.properties || errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

const removeLikes = async (email, zpid) => {
  const res = await Like.updateOne(
    { email: email },
    { $pull: { properties: { zpid: zpid } } }
  ).exec();
  if (!res.modifiedCount) {
    throw errorGenerator(ERROR_TYPE.PROPERTY_NOT_FOUND);
  }

  return getLikes(email);
};

const removeAllLikes = async email => {
  const res = await Like.updateOne(
    { email: email },
    { $set: { properties: [] } }
  );
  return res.acknowledged
    ? getLikes(email)
    : errorGenerator(ERROR_TYPE.DB_NETWORK_ERROR);
};

export { getLikes, addLikes, removeLikes, removeAllLikes };
