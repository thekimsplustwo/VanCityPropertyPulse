import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';
import { propertyDetails } from '../data/data.js';

const { Schema } = mongoose;

const propertyDetailSchema = new BaseSchema(
  {
    zpid: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    annualHomeownersInsurance: {
      type: Number,
      required: false,
    },
    priceHistory: {
      type: Number,
      required: false,
    },
    datePosted: {
      type: String,
      required: true,
    },
    yearBuilt: {
      type: Number,
      required: false,
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
    longitude: {
      type: Number,
      required: false,
    },
    latitude: {
      type: Number,
      required: false,
    },
    pricePerSquareFoot: {
      type: Number,
      required: false,
    },
    utilities: {
      type: Number,
      required: false,
    },
    address: {
      type: Object,
      properties: {
        city: {
          type: String,
          required: false,
        },
        neighborhood: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: false,
        },
        streetAddress: {
          type: String,
          required: false,
        },
        zipcode: {
          type: String,
          required: false,
        },
      },
      required: false,
    },
    schools: {
      type: Array,
      items: {
        type: Object,
        properties: {
          link: {
            type: String,
            required: false,
          },
          rating: {
            type: Number,
            required: false,
          },
          totalCount: {
            type: Number,
            required: false,
          },
          distance: {
            type: Number,
            required: false,
          },
          assigned: {
            type: String,
          },
          name: {
            type: String,
            required: false,
          },
          studentsPerTeacher: {
            type: Number,
            required: false,
          },
          isAssigned: {
            type: Boolean,
            required: false,
          },
          size: {
            type: Number,
            required: false,
          },
          level: {
            type: String,
            required: false,
          },
          grades: {
            type: String,
            required: false,
          },
          type: {
            type: String,
            required: false,
          },
        },
      },
      required: false,
    },
    monthlyHoaFee: {
      type: Number,
      required: false,
    },
    homeType: {
      type: Array,
      required: false,
    },
    imgSrc: {
      type: String,
      required: false,
    },
    dateSold: {
      type: String,
      required: false,
    },
    onMarketDate: {
      type: Number,
      required: false,
    },
    homeStatus: {
      type: String,
      required: false,
    },
    securityFeatures: {
      type: Array,
      items: {
        type: String,
      },
      required: false,
    },
    hasGarage: {
      type: Boolean,
      required: false,
    },
    hasCooling: {
      type: Boolean,
      required: false,
    },
    levels: {
      type: String,
      required: false,
    },
    otherFacts: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

const PropertyDetail =
  mongoose.model.PropertyDetail ||
  mongoose.model('PropertyDetail', propertyDetailSchema, 'propertyDetails');
//PropertyDetail.insertMany(propertyDetails);
export default PropertyDetail;
