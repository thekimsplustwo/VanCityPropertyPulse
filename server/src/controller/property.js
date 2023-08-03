import dotenv from 'dotenv';
import { propertyService } from '../services/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

let lastRequestTime = 0;
const INTERVAL_MS = 600;

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const delayNextRequest = async () => {
  const currentTime = Date.now();
  const timeSinceLastRequest = currentTime - lastRequestTime;
  const delay = Math.max(INTERVAL_MS - timeSinceLastRequest, 0);
  lastRequestTime = currentTime + delay;

  return sleep(delay);
};

const getPropertyDetails = async (req, res) => {
  try {
    const { zpid } = req.params;
    if (!zpid) {
      errorGenerator(ERROR_TYPE.INVALID_REQUEST);
    }

    // Enforce the delay between requests
    await delayNextRequest();

    const propertyDetails = await propertyService.getPropertyDetails(zpid);
    return res.status(200).json(propertyDetails);
  } catch (error) {
    // Handle the error appropriately here
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
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
