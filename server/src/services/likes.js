import dotenv from 'dotenv';
import { likesModel } from '../models/index.js';

dotenv.config();

const getLikes = async email => {
  return likesModel.getLikes(email);
};

const addLikes = async (email, property) => {
  return likesModel.addLikes(email, property);
};

const removeLikes = async (email, zpid) => {
  return likesModel.removeLikes(email, zpid);
};

const removeAllLikes = async email => {
  return likesModel.removeAllLikes(email);
};

export { getLikes, addLikes, removeLikes, removeAllLikes };
