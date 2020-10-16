const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
    unique: false,
  },
  nickname: {
    type: String,
    required: true,
    default: "My card",
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  type: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  history: {
    type: Array,
    required: true,
  },
});

module.exports = Card = mongoose.model("card", CardSchema);
