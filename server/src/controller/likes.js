import dotenv from 'dotenv';
import { likesService } from '../services/index.js';

dotenv.config();
const { FRONT_REDIRECT_URL } = process.env;

const getLikes = async (req, res) => {
  const { email } = req;
  const likes = await likesService.getLikes(email);
  return res.status(201).json(likes);
};

const addLikes = async (req, res) => {
  const { email } = req;
  const property = req.body;
  const likes = await likesService.addLikes(email, property);
  return res.status(201).json(likes);
};

const removeLikes = async (req, res) => {
  const { email } = req;
  const { zpid } = req.params;
  const likes = await likesService.removeLikes(email, Number(zpid));
  return res.status(201).json(likes);
};

export { getLikes, addLikes, removeLikes };
