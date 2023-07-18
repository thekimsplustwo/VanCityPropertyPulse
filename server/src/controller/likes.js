import dotenv from 'dotenv';
import { likesService } from '../services/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const getLikes = async (req, res) => {
  const { user } = req;
  const likes = await likesService.getLikes(user.email);
  return res.status(200).json(likes);
};

const addLikes = async (req, res) => {
  const { user } = req;
  const property = req.body;
  const likes = await likesService.addLikes(user.email, property);
  return res.status(201).json(likes);
};

const removeLikes = async (req, res) => {
  const { user } = req;
  const { zpid } = req.params;
  if (!zpid) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  const likes = await likesService.removeLikes(user.email, Number(zpid));
  return res.status(200).json(likes);
};

const removeAllLikes = async (req, res) => {
  const { user } = req;
  const likes = await likesService.removeAllLikes(user.email);
  return res.status(200).json(likes);
};

export { getLikes, addLikes, removeLikes, removeAllLikes };
