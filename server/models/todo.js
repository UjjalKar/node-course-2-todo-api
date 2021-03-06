const mongoose = require('mongoose');

// save new something Model
let Todo = mongoose.model('Todos', {
    text: {
      type: String,
      require: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });

  module.exports = {
      Todo
  };
  