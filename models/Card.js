const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
    unique: false,
  },
  balance: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  rate: {
      type: String,
      required: true
  },
  history: {
      type: Array,
      required: true
  }
});

module.exports = Card = mongoose.model("card", CardSchema);
