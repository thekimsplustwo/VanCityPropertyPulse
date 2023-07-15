import dotenv from 'dotenv';
import { homeService } from '../services/index.js';

const trimSortOpt = rawSort => {
  const [sortType, sortOpt] = rawSort?.split('_') ?? [];
  return sortOpt ? { [sortType]: sortOpt } : undefined;
};

const getList = async (req, res) => {
  const filter = req.query;
  const list = await homeService.getList(filter);
  return res.status(201).json(list);
};

const getListPaginated = async (req, res) => {
  console.log('GOT HERE');
  const { filter } = req.query;
  const page = parseInt(req.params.pageNumber, 10);

  try {
    const totalPages = await homeService.getTotalPages();
    const properties = await homeService.getList(page, filter);

    res.status(200).json({
      properties,
      totalPages,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error occurred while fetching properties' });
  }
};

export { getList, getListPaginated };
