const db  = require('./index');
const HostProfile = require('./models/hostProfile');
const generateHostProfiles = require('../helpers/generateHostProfiles')

const sampleHostProfiles = generateHostProfiles();

const insertSampleHostProfiles = function() {

  HostProfile.create(sampleHostProfiles)
    .then(() => {
      console.log('Successfully inserted 100 sample host profiles');
    });
};

insertSampleHostProfiles();