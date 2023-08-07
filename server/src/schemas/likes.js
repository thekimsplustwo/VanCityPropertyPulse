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
        type: BaseSchema.Types.Mixed,
      },
      propertyType: {
        type: String,
        required: false,
      },
      lotAreaValue: {
        type: Number,
        required: false,
      },
      address: {
        type: String,
        required: true,
      },
      imgSrc: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: true,
      },
      bedrooms: {
        type: Number,
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
      listingStatus: {
        type: String,
        required: false,
      },
      zpid: {
        type: Number,
        required: true,
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
        type: BaseSchema.Types.Mixed,
      },
      daysOnZillow: {
        type: Number,
        required: false,
      },
      bathrooms: {
        type: Number,
        required: false,
      },
      livingArea: {
        type: Number,
      },
      country: {
        type: String,
        required: false,
      },
      currency: {
        type: String,
        required: false,
      },
      lotAreaUnit: {
        type: String,
        required: false,
      },
      hasImage: {
        type: Boolean,
        required: false,
      },
    },
    { timestamps: true },
  ],
});

likeSchema.index({ email: 1, zpid: 1 }, { unique: true });
const Like = mongoose.model.Like || mongoose.model('Like', likeSchema, 'likes');

export default Like;
