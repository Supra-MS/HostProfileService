const mongoose = require('mongoose');
const db = require('../index');
mongoose.Promise = global.Promise;

const homeDescriptionSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    index: true
  },
  title_section: {
    type: Object,
    required: true
  },
  overview_section: {
    type: Object,
    required: true
  },
  highlights_section: {
    type: Object,
    required: true
  },
  description_section: {
    type: Object,
    required: true
  },
  sleeping_arrangements_section: {
    type: Object,
    required: true
  },
  amenities_section: {
    type: Object,
    required: true
  }
},
{ timestamps: true }
);

homeDescriptionSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const HomeDescription = mongoose.model('HomeDescription', homeDescriptionSchema);

module.exports = HomeDescription;