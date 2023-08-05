import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const likeSchema = new BaseSchema({
  email: {
    type: String,
    required: true,
  },
  properties: [
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
    { timestamps: true },
  ],
});
likeSchema.index({ email: 1, zpid: 1 }, { unique: true });
const Like = mongoose.model.Like || mongoose.model('Like', likeSchema, 'likes');

export default Like;
