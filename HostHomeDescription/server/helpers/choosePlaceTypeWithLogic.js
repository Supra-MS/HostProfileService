var faker = require('faker');

var placeType = ['Entire place', 'Private room', 'Shared room'];

var choosePlaceType = () => {
  var index = Math.floor(Math.random() * placeType.length);
  return placeType[index];
}

var selectedPlaceType = choosePlaceType();

var placeTypeLogic = (placeType) => {
  let is_entire_home, just_bath, is_private_bath, is_shared_bath;
  if (placeType === 'Entire place') {
    is_entire_home = true;
    just_bath = true;
    is_private_bath = false;
    is_shared_bath = false;
    return { placeType, is_entire_home, just_bath, is_private_bath, is_shared_bath }
  }
  if (placeType === 'Private room') {
    is_entire_home = false;
    just_bath = false;
    is_private_bath = faker.random.boolean();
    is_shared_bath = !is_private_bath;
    return { is_entire_home, just_bath, is_private_bath, is_shared_bath }
  }
  if (placeType === 'Shared room') {
    is_entire_home = false;
    just_bath = false;
    is_private_bath = faker.random.boolean();
    is_shared_bath = !is_private_bath;
    return { is_entire_home, just_bath, is_private_bath, is_shared_bath }
  }

};

module.exports = {
  selectedPlaceType,
  placeTypeLogic
}