import dotenv from 'dotenv';
import { propertyService } from '../services/index.js';

dotenv.config();
const { FRONT_REDIRECT_URL } = process.env;

const getPropertyDetails = async (req, res) => {
  const { user } = req;
  const { zpid } = req.params;
  const propertyDetails = await propertyService.getPropertyDetails(zpid);
  return res.status(201).json(propertyDetails);
};

export { getPropertyDetails };
