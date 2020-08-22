const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/homeDesc';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: false
});

mongoose.connection.on('connected', () => console.log('!!! Mongoose is connected !!!'));

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

module.exports = db;