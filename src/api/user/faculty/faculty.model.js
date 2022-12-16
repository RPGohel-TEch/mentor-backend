const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  address: {
    type: String,
  },
  birthdate: {
    type: String,
  },
  mobile: {
    type: String,
  },
  semester: [{
    type: Number,
  }],
  subjects: [{
    type: String,
  }],
  ssc: {
    type: String,
  },
  hsc: {
    type: String,
  },
  graduation: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Faculty", facultySchema);
