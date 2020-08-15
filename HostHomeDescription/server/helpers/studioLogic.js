var faker = require('faker');

var studioLogic = () => {
  var hasStudio = faker.random.boolean();
  var bedTypes = ['Single', 'Small double', 'Double', 'Queen', 'King', 'Bunk bed', 'Air mattress', 'Crib', 'Toddler bed', 'Hammock', 'Water bed'];

  var randomLen4CommonSpace = faker.random.number({min: 0, max: 11});
  var randomLen4SleepSpace = faker.random.number({min: 0, max: 11});

  var studioObj = {
    hasStudio: false,
    noOfBedrooms: faker.random.number({min: 1, max: 5}),
    hasCommonSpace: true,
    hasSleepingSpace: true,
    commonSpaces: [],
    sleepingSpaces: [],
  };

  if (randomLen4CommonSpace > 0) {
    for (var i = 0; i < randomLen4CommonSpace; i++) {
      var indexI = Math.floor(Math.random() * 3);
      if (studioObj.commonSpaces.indexOf(bedTypes[indexI]) === -1) {
        studioObj.commonSpaces.push(bedTypes[indexI]);
      }
    }
  }
  if (randomLen4SleepSpace > 0) {
    for (var j = 0; j < randomLen4SleepSpace; j++) {
      var indexJ = Math.floor(Math.random() * 5);
      if (studioObj.sleepingSpaces.indexOf(bedTypes[indexJ]) === -1) {
        studioObj.sleepingSpaces.push(bedTypes[indexJ]);
      }
    }
  }

  if (hasStudio) {
    studioObj.hasStudio = hasStudio;
    studioObj.noOfBedrooms = 0;
    studioObj.hasSleepingSpace = false;
    studioObj.sleepingSpaces = [];
  }

  return studioObj;

};

module.exports = studioLogic;