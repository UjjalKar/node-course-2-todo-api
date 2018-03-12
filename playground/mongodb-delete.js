// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongodb server');
  }

  console.log('Connect to mongodb');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany on Users database
  // db.collection('Users').deleteMany({name: 'Ujjal'}).then((results) => {
  //   console.log(results);
  // });

  // findOneAndDelete on users database

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5aa6865d8f0e5a11b97bcacb')
  }).then((results) => {
    console.log(results);
  });
  // db.close();
});
