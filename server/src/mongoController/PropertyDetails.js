const mongoose = require('mongoose');

const taxHistorySchema = new mongoose.Schema({
  time: Number,
  valueIncreaseRate: Number,
  taxIncreaseRate: Number,
  taxPaid: Number,
  value: Number,
});

const schoolSchema = new mongoose.Schema({
  link: String,
  rating: Number,
  totalCount: Number,
  distance: Number,
  assigned: Boolean,
  name: String,
  studentsPerTeacher: Number,
  isAssigned: Boolean,
  size: Number,
  level: String,
  grades: String,
  type: String,
});

const propertyDetailsSchema = new mongoose.Schema({
  zpid: { type: Number, required: true },
  price: { type: Number, required: true },
  taxHistory: [taxHistorySchema],
  description: { type: String, required: true },
  annualHomeownersInsurance: { type: Number, required: true },
  priceHistory: Number,
  datePosted: { type: String, required: true },
  yearBuilt: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  livingArea: { type: Number, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  pricePerSquareFoot: { type: Number, required: true },
  utilities: { type: mongoose.Schema.Types.Mixed, default: null },
  address: {
    city: { type: String, required: true },
    neighborhood: String,
    state: { type: String, required: true },
    streetAddress: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  schools: [schoolSchema],
  monthlyHoaFee: Number,
  homeType: { type: String, required: true },
  imgSrc: { type: String, required: true },
  dateSold: String,
  onMarketDate: { type: Number, required: true },
  homeStatus: { type: String, required: true },
  securityFeatures: [String],
  hasGarage: Boolean,
  hasCooling: Boolean,
  levels: String,
  otherFacts: Object,
});

module.exports = mongoose.model('Property', propertyDetailsSchema);
