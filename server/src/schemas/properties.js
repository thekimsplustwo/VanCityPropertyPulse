import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const propertySchema = new BaseSchema(
  {
    zpid: {
      type: String,
      required: true,
      unique: true,
    },
    imgSrc: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: false,
    },
    bathrooms: {
      type: Number,
      required: false,
    },
    livingArea: {
      type: Number,
      required: false,
    },
    propertyType: {
      type: String,
      required: false,
    },
    listingStatus: {
      type: String,
      required: false,
    },
    unit: {
      type: String,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
    latitude: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Property =
  mongoose.model.Property ||
  mongoose.model('Property', propertySchema, 'properties');
export default Property;
