const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
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
  semester: {
    type: Number,
  },
  pic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Media",
  },
  role: {
    type: String,
    default: "student"
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

module.exports = mongoose.model("Students", studentSchema);
