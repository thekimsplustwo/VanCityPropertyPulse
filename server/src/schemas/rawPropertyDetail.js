import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const { Schema } = mongoose;
const listingSubTypeSchema = new BaseSchema({
  is_FSBA: Boolean,
});

const propertyItemSchema = new BaseSchema({
  dateSold: Schema.Types.Mixed,
  propertyType: String,
  lotAreaValue: Number,
  address: String,
  imgSrc: String,
  price: Number,
  bedrooms: Number,
  longitude: Number,
  latitude: Number,
  listingStatus: String,
  zpid: String,
  listingSubType: listingSubTypeSchema,
  contingentListingType: Schema.Types.Mixed,
  daysOnZillow: Number,
  bathrooms: Number,
  livingArea: Number,
  country: String,
  currency: String,
  lotAreaUnit: String,
  hasImage: Boolean,
});

const rawPropertyDetailSchema = new BaseSchema({
  props: [propertyItemSchema],
  resultsPerPage: Number,
  totalPages: Number,
  totalResultCount: Number,
  currentPage: Number,
});

const RawPropertyDetail =
  mongoose.model.RawPropertyDetail ||
  mongoose.model(
    'rawPropertyDetail',
    rawPropertyDetailSchema,
    'rawPropertyDetails'
  );
//PropertyDetail.insertMany(propertyDetails);
export default RawPropertyDetail;
