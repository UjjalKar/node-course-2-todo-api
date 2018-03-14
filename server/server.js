const mongoose = require('mongoose');

// conncet to mongdb
// using promsise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something Model
let Todo = mongoose.model('Todos', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// creating a new todos
// let newTodo = new Todo({
//   text: 'railway group d',
//   completed: true,
//   completedAt: 12
// });

// save to the database
// newTodo.save().then((doc) => {
//   console.log('Saved Todo.',doc);
  
// }, (e) => {
//   console.log('Unable to save Todo',e);
  
// });

// Create a todo
let otherTodo = new Todo({
  text: 'laura',
  completed: true,
  completedAt: 123
});

// Save to the Database
otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
  
}, (e) => {
  console.log('Unable to save todo',e);
});





