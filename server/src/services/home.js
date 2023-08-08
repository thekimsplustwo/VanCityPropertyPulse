import dotenv from 'dotenv';
import axios from 'axios';
import { homeModel } from '../models/index.js';
import { ERROR_TYPE, errorGenerator } from '../utils/error.js';
import { neighborhoodsVancouver } from '../data/locationData.js';

dotenv.config();

const ZILLOW_API_LISTING_FLAG_ON = process.env.ZILLOW_API_LISTING === 'on';

const datascrappingPropertyList = async data => {
  await homeModel.datascrappingPropertyList(data);
};

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

const requestZillowAPIExtendedSearch = async (trimmedFilter, offset) => {
  const options = ExtendedSearchOptions(trimmedFilter);
  try {
    const response = await axios.request(options);
    if (response.status !== 200 || response.data.status === 'error') {
      errorGenerator(ERROR_TYPE.ZILLOW_API_NETWORK_ERROR);
    }
    if (
      trimmedFilter.page &&
      Number(trimmedFilter.page) > response.data.totalPages
    ) {
      return [];
    }
    const data = response.data.props;
    if (
      process.env.DATA_SCRAP === 'on' ||
      process.env.DATA_SCRAP === 'exclusive'
    ) {
      await datascrappingPropertyList(data);
    }
    if (process.env.DATA_SCRAP === 'exclusive') {
      return response.data;
    }

    return data.length > offset ? data.slice(0, offset) : data || [];
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
  let locationOpt = filter.locationAdmin;
  if (!locationOpt) {
    locationOpt = filter.location
      ? `${await getZipcodeByTitleFromDB(filter.location)} bc`
      : 'vancouver, bc';
  }
  console.log('locationOpt ', locationOpt);
  return {
    ...filter,
    location: locationOpt,
    listingStatus: 'FOR_SALE',
  };
};

const getList = async (filter, sort) => {
  const trimmedFilter = await trimFilter(filter);
  const offset = filter.offset || 39;
  return ZILLOW_API_LISTING_FLAG_ON
    ? requestZillowAPIExtendedSearch(trimmedFilter, offset)
    : homeModel.getList(trimmedFilter, sort);
};

export { getList };
