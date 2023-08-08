import dotenv from 'dotenv';
import axios from 'axios';
import { propertyModel } from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';

dotenv.config();

const ZILLOW_API_PROPERTY_DETAIL_FLAG_ON =
  process.env.ZILLOW_API_PROPERTY_DETAIL.toLowerCase() === 'on';

const ZILLOW_API_ENDPOINT = {
  DETAIL: 'https://zillow-com1.p.rapidapi.com/property',
  WALK_SCORE: 'https://zillow-com1.p.rapidapi.com/walkAndTransitScore',
};

const zillowAPIOptions = (zpid, endpoint) => {
  return {
    method: 'GET',
    url: endpoint,
    params: { zpid: zpid },
    headers: {
      'X-RapidAPI-Key': process.env.ZILLOW_API_KEY,
      'X-RapidAPI-Host': process.env.ZILLOW_API_HOST,
    },
  };
};

const validateResponseStatus = response => {
  if (response.status !== 200 || response.data.status === 'error') {
    errorGenerator(ERROR_TYPE.ZILLOW_API_NETWORK_ERROR);
  }
};

const validateResonseDataFromDetailAPI = response => {
  if (!response.data.zpid) {
    errorGenerator(ERROR_TYPE.PROPERTY_NOT_FOUND);
  }
};

const datascrappingProperty = async data => {
  await propertyModel.datascrappingProperty(data);
};

const getPropertyDetailFromZillowAPI = async zpid => {
  const options = zillowAPIOptions(zpid, ZILLOW_API_ENDPOINT.DETAIL);
  const response = await axios.request(options);
  validateResponseStatus(response);
  validateResonseDataFromDetailAPI(response);
  if (
    process.env.DATA_SCRAP === 'on' ||
    process.env.DATA_SCRAP === 'exclusive'
  ) {
    await datascrappingProperty(response.data);
  }
  return response.data;
};

const getPropertyDetailFromDatabase = async zpid => {
  const response = propertyModel.getPropertyDetails(zpid);
  return response || [];
};

const getPropertyDetails = async zpid => {
  return ZILLOW_API_PROPERTY_DETAIL_FLAG_ON
    ? getPropertyDetailFromZillowAPI(zpid)
    : getPropertyDetailFromDatabase(zpid);
};

const getPropertyWalkScore = async zpid => {
  if (!ZILLOW_API_PROPERTY_DETAIL_FLAG_ON) return {};
  const options = zillowAPIOptions(zpid, ZILLOW_API_ENDPOINT.WALK_SCORE);
  const response = await axios.request(options);
  return response.data || {};
};

export { getPropertyDetails, getPropertyWalkScore };
