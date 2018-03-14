const mongoose = require('mongoose');

// create schema for users
let Users = mongoose.model('Users', {
    email: {
      type: String,
      required: true,
      minlenght: 1,
      trim: true
    }
  });

  module.exports = {
      Users
  };