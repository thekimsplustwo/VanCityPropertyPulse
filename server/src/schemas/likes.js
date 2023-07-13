import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const likeSchema = new BaseSchema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  properties: [
    {
      zpid: {
        type: Number,
        required: true,
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
    { timestamps: true },
  ],
});

const Like = mongoose.model.Like || mongoose.model('Like', likeSchema, 'likes');

export default Like;
