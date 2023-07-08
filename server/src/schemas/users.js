import mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema.js';

const UserSchema = new BaseSchema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    region: { type: String, required: false },
    photo: { type: String, required: false },
    source: { type: String, required: false },
    accessToken: { type: String },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model.User || mongoose.model('User', UserSchema, 'users');

export default User;
