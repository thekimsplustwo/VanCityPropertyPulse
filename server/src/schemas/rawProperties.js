import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const rawPropertySchema = new BaseSchema(
  {
    dateSold: {
      type: String || null,
    },
    propertyType: {
      type: String,
    },
    lotAreaValue: {
      type: Number,
    },
    address: {
      type: String,
    },
    imgSrc: {
      type: String,
    },
    price: {
      type: Number,
    },
    bedrooms: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
    listingStatus: {
      type: String,
    },
    zpid: {
      type: String,
      unique: true,
    },
    listingSubType: {
      type: Object,
      properties: {
        is_FSBA: {
          type: Boolean,
        },
      },
    },
    contingentListingType: {
      type: String || null,
    },
    daysOnZillow: {
      type: Number,
    },
    bathrooms: {
      type: Number,
    },
    livingArea: {
      type: Number,
    },
    country: {
      type: String,
    },
    currency: {
      type: String,
    },
    lotAreaUnit: {
      type: String,
    },
    hasImage: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const RawProperty =
  mongoose.model.RawProperty ||
  mongoose.model('RawProperty', rawPropertySchema, 'rawProperties');

export default RawProperty;
