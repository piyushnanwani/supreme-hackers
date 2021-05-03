const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String },
  name: { type: String },
  profile_link: { type: String },
  location: { type: String },
  education: { type: String },
  challenges_solved: { type: Number },
  solutions_submitted: { type: Number },
  solutions_accepted: { type: Number },
  overall_rank: { type: Number },
  followers: { type: Number },
  following: { type: Number },
  data_structures_percentile: { type: Number },
  algorithms_percentile: { type: Number },
  cplusplus_percentile: { type: Number },
  java_percentile: { type: Number },
  python_percentile: { type: Number },
  html_percentile: { type: Number },
  javascript_percentile: { type: Number },
  data_structures_percentile: { type: Number },
  num_of_votes: { type: Number },
  device_type: { type: String },
  timeStamp: { type: Date, default: Date.now },
});

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
  }
});

module.exports = mongoose.model('User', UserSchema);

