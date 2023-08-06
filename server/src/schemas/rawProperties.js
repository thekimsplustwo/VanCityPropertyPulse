import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const { Schema } = mongoose;
const listingSubTypeSchema = new BaseSchema(
  {
    is_FSBA: Boolean,
  },
  { _id: false }
);

const rawPropertySchema = new BaseSchema(
  {
    dateSold: BaseSchema.Types.Mixed,
    propertyType: String,
    lotAreaValue: Number,
    address: String,
    imgSrc: String,
    price: Number,
    bedrooms: Number,
    longitude: Number,
    latitude: Number,
    listingStatus: String,
    zpid: Number,
    listingSubType: listingSubTypeSchema,
    contingentListingType: BaseSchema.Types.Mixed,
    daysOnZillow: Number,
    bathrooms: Number,
    livingArea: Number,
    country: String,
    currency: String,
    lotAreaUnit: String,
    hasImage: Boolean,
  },
  { timestamps: true }
);

const RawProperty =
  mongoose.model.RawProperty ||
  mongoose.model('RawProperty', rawPropertySchema, 'rawProperties');

export default RawProperty;
