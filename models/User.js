const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cards: {
    type: Array,
    required: true,
  },
  trips: {
    type: Array,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
