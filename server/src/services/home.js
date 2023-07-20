import dotenv from 'dotenv';
import axios from 'axios';
import * as model from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';
import { neighborhoodsVancouver } from '../data/locationData.js';

dotenv.config();

const { MOCK } = process.env;
const homeModel =
  MOCK.toLowerCase() === 'on' ? model.mockHomeModel : model.homeModel;

const ZILLOW_API_LISTING_FLAG_ON =
  process.env.ZILLOW_API_LISTING.toLowerCase() === 'on';

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

const requestZillowAPIExtendedSearch = async trimmedFilter => {
  const options = ExtendedSearchOptions(trimmedFilter);
  try {
    const response = await axios.request(options);
    if (response.status !== 200 || response.data.status === 'error') {
      errorGenerator(ERROR_TYPE.ZILLOW_API_NETWORK_ERROR);
    }
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

const trimFilter = async filter => {
  return {
    ...filter,
    location: filter.location
      ? `${await getZipcodeByTitleFromDB(filter.location)} bc`
      : 'vancouver, bc',
    listingStatus: 'FOR_SALE',
  };
};

const getList = async (filter, sort) => {
  const trimmedFilter = await trimFilter(filter);
  return ZILLOW_API_LISTING_FLAG_ON
    ? requestZillowAPIExtendedSearch(trimmedFilter)
    : homeModel.getList(trimmedFilter, sort);
};

export { getList };
