const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Number: {
    type: Number,
    required: true,
  },
  open: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("StoreFinder", StoreSchema);
