import dotenv from 'dotenv';
import { propertyService } from '../services/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const getPropertyDetails = async (req, res) => {
  const { zpid } = req.params;
  if (!zpid) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  const propertyDetails = await propertyService.getPropertyDetails(zpid);
  return res.status(200).json(propertyDetails);
};

const getPropertyWalkScore = async (req, res) => {
  const { zpid } = req.params;
  if (!zpid) {
    errorGenerator(ERROR_TYPE.INVALID_REQUEST);
  }
  const propertyDetails = await propertyService.getPropertyWalkScore(zpid);
  return res.status(200).json(propertyDetails);
};

export { getPropertyDetails, getPropertyWalkScore };
