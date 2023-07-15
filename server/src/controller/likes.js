import dotenv from 'dotenv';
import { likesService, propertyService } from '../services/index.js';

dotenv.config();
const { FRONT_REDIRECT_URL } = process.env;

const getLikes = async (req, res) => {
  const { user } = req;
  console.log('user ', user.email);
  const likes = await likesService.getLikes(user.email);
  return res.status(201).json(likes);
};

const addLikes = async (req, res) => {
  const { user } = req;
  console.log('user ====', user);
  const property = req.body;
  const likes = await likesService.addLikes(user.email, property);
  return res.status(201).json(likes);
};

const removeLikes = async (req, res) => {
  const { user } = req;
  const { zpid } = req.params;
  const likes = await likesService.removeLikes(user.email, Number(zpid));
  return res.status(201).json(likes);
};

const removeAllLikes = async (req, res) => {
  const { user } = req;
  const likes = await likesService.removeAllLikes(user.email);
  return res.status(201).json(likes);
};

export { getLikes, addLikes, removeLikes, removeAllLikes };
