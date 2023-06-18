import dotenv from 'dotenv';
import { propertyService } from '../services/index.js';

dotenv.config();
const { FRONT_REDIRECT_URL } = process.env;

const getPropertyDetails = async (req, res) => {
  const { zpid } = req.params;
  console.log('req param ', req);
  console.log('controller zipd ', zpid);
  const propertyDetails = await propertyService.getPropertyDetails(zpid);
  return res.status(201).json(propertyDetails);
};

export { getPropertyDetails };
