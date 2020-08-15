var faker = require('faker');
var choosePropertyType = require('./choosePropertyType');
var { selectedPlaceType, placeTypeLogic } = require('./choosePlaceTypeWithLogic');
var descriptionLogic = require('./descriptionLogic');
var studioLogic = require('./studioLogic');
var cleanLogic = require('./cleanLogic');

var generateHomeDetails = () => {
  var homeDescriptions = [];

  for (var i = 1; i < 101; i++) {

    let placeTypeObj = placeTypeLogic(selectedPlaceType);
    let descObj = descriptionLogic();
    let studioObj = studioLogic();
    let cleanObj = cleanLogic();

    homeDescriptions.push({
      "_id": i,
      "title_section": {
        "title": faker.lorem.sentence(),
        "location": {
          "country": faker.address.country(),
          "street_address": faker.address.streetAddress(),
          "apartment": faker.random.number({min: 100, max: 999}),
          "city": faker.address.city(),
          "state": faker.address.state(),
          "zip": faker.address.zipCode()
        }
      },
      "overview_section": {
        "place_type": selectedPlaceType,
        "property_type": choosePropertyType(),
        "has_studio": studioObj.hasStudio,
        "no_of_guests": faker.random.number({min: 1, max: 3}),
        "no_of_bedrooms": studioObj.noOfBedrooms,
        "no_of_bath": faker.random.number({min: 0, max: 3}),
        "no_of_beds": faker.random.number({min: 0, max: 3}),
        "just_bath": placeTypeObj.just_bath,
        "is_private_bath": placeTypeObj.is_private_bath,
        "is_shared_bath": placeTypeObj.is_shared_bath,
        "guest_stay_duration": {
          "min_nights": faker.random.number({min: 1, max: 60}),
          "max_nights": faker.random.number({min: 1, max: 60})
        }
      },
      "highlights_section": {
        "has_cancellation_policy": faker.random.boolean(),
        "free_cancellation_days": cleanObj.freeCancellationDays,
        "is_entire_home": placeTypeObj.is_entire_home,
        "has_self_checkIn": faker.random.boolean(),
        "recent_guests_clean_reviews": cleanObj.recentCleanReviews,
        "is_clean_tidy": cleanObj.isCleanTidy,
        "has_enhanced_clean": cleanObj.hasEnhancedClean
      },
      "description_section": {
        "description": faker.lorem.sentences(),
        "space_desc": descObj.spaceDesc,
        "guest_desc": descObj.guestDesc,
        "availability_desc": descObj.availDesc,
        "neigh_desc": descObj.neighDesc,
        "getting_around_desc": descObj.getArdDesc
      },
      "sleeping_arrangements_section": {
        "has_sleeping_arrangements": faker.random.boolean(),
        "common_spaces": studioObj.commonSpaces,
        "sleeping_beds": studioObj.sleepingSpaces
      },
      "amenities_section": {
        "essentials": faker.random.boolean(),
        "heating": faker.random.boolean(),
        "washer": faker.random.boolean(),
        "tv": faker.random.boolean(),
        "wiFi": faker.random.boolean(),
        "indoor_fireplace": faker.random.boolean(),
        "dryer": faker.random.boolean(),
        "air_conditioning": faker.random.boolean(),
        "iron": faker.random.boolean(),
        "laptop_friendly_workspace": faker.random.boolean(),
        "bed_and_bath": {
          "shampoo": faker.random.boolean(),
          "hair_dryer": faker.random.boolean()
        },
        "closet_drawers": faker.random.boolean(),
        "private_entrance": faker.random.boolean(),
        "safety_features": {
          "smoke_detector": faker.random.boolean(),
          "carbon_monoxide_detector": faker.random.boolean(),
          "first_aid_kit": faker.random.boolean(),
          "fire_extinguisher": faker.random.boolean(),
          "lock_on_bedroom_door": faker.random.boolean()
        },
        "facilities": {
          "free_parking": faker.random.boolean(),
          "gym": faker.random.boolean(),
          "pool": faker.random.boolean(),
          "hot_tub": faker.random.boolean()
        },
        "dining": {
          "kitchen": faker.random.boolean(),
          "breakfast_coffee_tea": faker.random.boolean()
        }

      }
    })
  }

  return homeDescriptions;

};

module.exports = generateHomeDetails;