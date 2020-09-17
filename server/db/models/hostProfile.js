const mongoose = require('mongoose');
const db = require('../index');

const hostProfileSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    index: true
  },
  host_url: String,
  host_name: String,
  cohost_name: String,
  host_about: String,
  host_messages: String,
  host_identity_verified: Boolean,
  host_is_superHost: Boolean,
  host_has_profile_pic: Boolean,
  host_has_coHost: Boolean,
  host_response_time: Number,
  host_listings_count: Number,
  host_verifications: Array,
  host_languages: Array
},
{ timestamps: true }
);

hostProfileSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const HostProfile = mongoose.model('HostProfile', hostProfileSchema);

module.exports = HostProfile;