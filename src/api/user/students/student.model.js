const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
  },
  birthdate: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  semester: {
    type: Number,
  },
  enrollment_no: {
    type: String
  },
  ssc_result: {
    type: Number
  },
  hsc_result: {
    type: Number
  },
  branch: {
    type: String
  },
  batch: {
    type: String
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
