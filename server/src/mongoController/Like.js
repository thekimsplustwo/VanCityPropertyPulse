const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  properties: [
    {
      zpid: {
        type: Number,
        required: true,
      },
      imgSrc: {
        type: String,
        required: true,
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
        required: true,
      },
      bathrooms: {
        type: Number,
        required: true,
      },
      livingArea: {
        type: Number,
        required: true,
      },
      propertyType: {
        type: String,
        required: true,
      },
      listingStatus: {
        type: String,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
    },
  ],
});

module.export = mongoose.model('Property', likeSchema);
