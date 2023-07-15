import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const NeighborhoodSchema = new BaseSchema({
  title: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

const Neighborhood =
  mongoose.model.Neighborhood ||
  mongoose.model('Neighborhood', NeighborhoodSchema, 'neighborhoods');

export default Neighborhood;
