var choosePropertyType = () => {
  var placeTypes = ['Apartment', 'House', 'Secondary unit', 'Unique space', 'Bed and Breakfast', 'Boutique hotel'];

  var apartmentTypes = ['Apartment', 'Condominium', 'Serviced apartment', 'Loft', 'Casa particular'];

  var houseTypes = ['House', 'Villa', 'Townhouse', 'Cottage', 'Bungalow', 'Cabin', 'Casa particular', 'Chalet', 'Cycladic house', 'Dammuso', 'Dome house', 'Earth house', 'Farm stay', 'Houseboat', 'Hut', 'LightHouse', 'Pension', 'Shepherd hut', 'Tiny house', 'Trullo'];

  var secUnitTypes = ['Guest suite', 'Guesthouse', 'Farm stay'];

  var uniqueSpaceTypes = ['Farm stay', 'Camper/RV', 'Boat', 'Campsite', 'Earth house', 'Barn', 'Bus', 'Castle', 'Dome house', 'Cave', 'Houseboat', 'Hut', 'Igloo', 'Island', 'LightHouse', 'Pension', 'Plane', 'Shepherd hut', 'Tent', 'Tipi', 'Train', 'TreeHouse', 'Windmill', 'Yurt'];

  var bedBFTypes = ['Bed and Breakfast', 'Farm stay', 'Nature lodge', 'Casa particular', 'Minsu', 'Ryokan'];

  var boutiqueTypes = ['Hotel', 'Boutique hotel', 'Hostel', 'Resort', 'Serviced apartment', 'Apartment hotel', 'Heritage hostel', 'Kezhan', 'Natural lodge'];

  var choosePlaceType = () => {
    var index = Math.floor(Math.random() * placeTypes.length);
    return placeTypes[index];
  }

  var chooseSpecificPlaceType = (placeType) => {
    var index = Math.floor(Math.random() * placeType.length);
    return placeType[index];
  }

  let selectedPlaceType = choosePlaceType();
  let aptType, houseType, secUnitType, uniqueSpaceType, bedBFType, boutiqueType;

  if (selectedPlaceType === 'Apartment') {
    return aptType = chooseSpecificPlaceType(apartmentTypes);
  }
  if (selectedPlaceType === 'House') {
    return houseType = chooseSpecificPlaceType(houseTypes);
  }
  if (selectedPlaceType === 'Secondary unit') {
    return secUnitType = chooseSpecificPlaceType(secUnitTypes);
  }
  if (selectedPlaceType === 'Unique space') {
    return uniqueSpaceType = chooseSpecificPlaceType(uniqueSpaceTypes);
  }
  if (selectedPlaceType === 'Bed and Breakfast') {
    return bedBFType = chooseSpecificPlaceType(bedBFTypes);
  }
  if (selectedPlaceType === 'Boutique hotel') {
    return boutiqueType = chooseSpecificPlaceType(boutiqueTypes);
  }
};

module.exports = choosePropertyType;