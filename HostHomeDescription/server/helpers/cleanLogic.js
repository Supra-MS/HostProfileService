var faker = require('faker');

var cleanLogic = () => {
  var freeCancellationDays = [24, 5, 48];

  var getRandomCancellationDays = () => {
    var index = Math.floor(Math.random() * freeCancellationDays.length);
    return freeCancellationDays[index];
  };

  var recentCleanReviews = faker.random.number({min: 0, max: 20});

  var cleanLogicObj = {
    freeCancellationDays: getRandomCancellationDays(),
    recentCleanReviews: 0,
    isCleanTidy: false,
    hasEnhancedClean: true
  };

  if (recentCleanReviews > 10) {
    cleanLogicObj.isCleanTidy = true;
    cleanLogicObj.hasEnhancedClean = false;
    cleanLogicObj.recentCleanReviews= recentCleanReviews
  }

  return cleanLogicObj;

};

module.exports = cleanLogic;