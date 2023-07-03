const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  region: { type: String, required: true },
  photo: { type: String, required: true },
});

module.export = mongoose.model('User', userSchema);
