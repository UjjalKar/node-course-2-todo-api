const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

// initialize the express
const app = express();
/*
  -------------CRUD operation-------------
  C = Create[POST request],
  R = Read[GET request],
  U = Update[POST request],
  D = Delete[GET request]
*/
/* Creating Middleware */

app.use(bodyParser.json());

/* Creating Todos*/
app.post('/todos', (req, res) => {
  // send data to mongodb
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});
// creating server
app.listen(3000, () => {
  console.log('Satarted on port 3000');
});