// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connect to mongodb');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5aa6793c7a8854167d0b5485")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((results) => {
  //   console.log(results);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5aa67d96aa4fce187923a6c5")
  }, {
    $set: {
      name: 'Ujjal'
    },
    $inc: {
      age: +2
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

  // db.close();
});
