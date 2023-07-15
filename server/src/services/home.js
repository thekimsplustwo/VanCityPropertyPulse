import dotenv from 'dotenv';
import axios from 'axios';
import { homeModel } from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';
import { neighborhoodsVancouver } from '../data/locationData.js';

dotenv.config();
const ExtendedSearchOptions = (filter, sort) => {
  return {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: filter,
    headers: {
      'X-RapidAPI-Key': process.env.ZILLOW_API_KEY,
      'X-RapidAPI-Host': process.env.ZILLOW_API_HOST,
    },
  };
};

const requestZillowAPIExtendedSearch = async options => {
  try {
    const response = await axios.request(options);
    return response.data.props || [];
  } catch (error) {
    errorGenerator(ERROR_TYPE.ZILLOW_API_NETWORK_ERROR);
  }
};

const getZipcodeByTitleFromDB = async title => {
  return homeModel.findZipcodeByNeighborhoodTitle(title);
};

const getZipcodeByTitle = title => {
  const neighborhood = neighborhoodsVancouver.find(n => n.title === title);
  return neighborhood
    ? neighborhood.zipcode
    : errorGenerator(ERROR_TYPE.INVALID_REQUEST);
};

const getList = async (filter, sort) => {
  const trimedFilter = {
    ...filter,
    location: filter.location
      ? `${await getZipcodeByTitleFromDB(filter.location)} bc`
      : 'vancouver, bc',
    listingStatus: 'FOR_SALE',
  };
  const options = ExtendedSearchOptions(trimedFilter);
  const res = requestZillowAPIExtendedSearch(options);
  return res;
  //return homeModel.getList(trimedFilter, sort);
};

export { getList };
