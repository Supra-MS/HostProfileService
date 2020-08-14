var faker = require('faker');

var descriptionLogic = () => {
  var descObj = {
    spaceDesc: '',
    guestDesc: '',
    availDesc: '',
    neighDesc: '',
    getArdDesc: ''
  };

  var hasSpaceDesc = faker.random.boolean();
  var hasGuestDesc = faker.random.boolean();
  var hasAvailabilityDesc = faker.random.boolean();
  var hasNeighDesc = faker.random.boolean();
  var hasGettingArdDesc = faker.random.boolean();

  if (hasSpaceDesc) {
    descObj.spaceDesc = faker.lorem.paragraphs();
  }
  if (hasGuestDesc) {
    descObj.guestDesc = faker.lorem.paragraphs();
  }
  if (hasAvailabilityDesc) {
    descObj.availDesc = faker.lorem.paragraphs();
  }
  if (hasNeighDesc) {
    descObj.neighDesc = faker.lorem.paragraphs();
  }
  if (hasGettingArdDesc) {
    descObj.getArdDesc = faker.lorem.paragraphs();
  }

  return descObj;

};

module.exports = descriptionLogic;