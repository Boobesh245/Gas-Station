const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  address2: String,
  city: String,
  state: String,
  zip: String
});

module.exports = mongoose.model('User', userSchema);