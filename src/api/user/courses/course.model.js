const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  batch: [
    {
      sem: { type: String },
      batch: { type: String },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Courses", courseSchema);
