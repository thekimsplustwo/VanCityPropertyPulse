/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
import pLimit from 'p-limit';
import { homeService, propertyService } from '../services/index.js';
import RawPropertyDetail from '../schemas/rawPropertyDetail.js';

// eslint-disable-next-line no-promise-executor-return
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const limit = pLimit(3);
const strictLimit = pLimit(1);

export const datascrappingSinglePage = async (req, res) => {
  const filter = req.query;
  filter.offset = 41;
  console.log('filter ', filter);
  const data = await homeService.getList(filter);

  const properties = data.props;
  const { totalPages, currentPage, totalResultCount } = data;
  const limit = pLimit(2);
  const tasks = properties.map(property =>
    limit(async () => {
      await propertyService.getPropertyDetails(property.zpid);
      await delay(2000);
    })
  );

  await Promise.all(tasks);
  return res.status(201).json(totalResultCount);
};

export const datascrapping = async (req, res) => {
  const filter = req.query;
  filter.offset = 41;
  let properties = [];
  let data = await homeService.getList(filter);
  const totalPages = filter.totalPages || data.totalPages;
  let currentPage = filter.currentPage || data.currentPage;
  delete filter.totalPages;
  delete filter.currentPage;
  const { totalResultCount } = data;
  console.log('filter ');

  while (currentPage <= totalPages) {
    console.log('currentPage : ', currentPage);
    console.log('totalPages : ', totalPages);
    console.log('totalResultCount : ', totalResultCount);
    const currentProperties = data.props;
    properties = [...properties, ...currentProperties];

    const tasks = currentProperties.map(property =>
      strictLimit(async () => {
        await propertyService.getPropertyDetails(property.zpid);
        await delay(2000);
      })
    );

    await Promise.all(tasks);

    await delay(2000);
    data = strictLimit(async () => {
      await homeService.getList(filter);
    });
    currentPage = data.currentPage;
  }

  return res
    .status(201)
    .json(`${totalResultCount} :: ${totalPages} :: ${properties.length}`);
};

export const fromdatabase = async (req, res) => {
  try {
    const zpids = await RawPropertyDetail.find({})
      .select('zpid -_id')
      .lean()
      .exec();

    const tasks = zpids.map(zpidObj =>
      strictLimit(async () => {
        await propertyService.getPropertyDetails(zpidObj.zpid);
        await delay(2000);
      })
    );

    await Promise.all(tasks);

    return res.status(201).json('good');
  } catch (err) {
    console.error('Error fetching zpids:', err);
    return res.status(500).json({ error: 'An error occurred' });
  }
};
