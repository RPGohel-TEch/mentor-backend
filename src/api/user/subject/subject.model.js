const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  subject_name: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  batch: {
    type: String
  },
  faculty: {
    type: String,
    ref: "Faculty"
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

module.exports = mongoose.model("Subject", subjectSchema);
