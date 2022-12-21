const mongoose = require("mongoose");

const batchSchema = mongoose.Schema({
  semester: {
    type: String,
  },
  branch: {
    type: String,
  },
  batch: {
    type: String
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

module.exports = mongoose.model("Batch", batchSchema);
