const HomeDescription = require('./models/homeDescription');
const generateHomeDetails = require('../helpers/generateHomeDetails');

const sampleHomeDetails = generateHomeDetails();

const insertSampleHomeDetails = function() {

  HomeDescription.create(sampleHomeDetails)
    .then(() => {
      console.log('Successfully inserted 100 sample home description');
    });
};

insertSampleHomeDetails();