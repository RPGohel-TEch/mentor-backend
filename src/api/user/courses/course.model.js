const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  first_batch: {
    type: String,
    required: true,
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

module.exports = mongoose.model("Courses", userSchema);
