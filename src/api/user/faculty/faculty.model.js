const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
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
  semester: [
    {
      type: Number,
    },
  ],
  subjects: [
    {
      type: String,
    },
  ],
  ssc: {
    type: String,
  },
  hsc: {
    type: String,
  },
  graduation: {
    type: String,
  },
  role: {
    type: String,
    default: "faculty",
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
