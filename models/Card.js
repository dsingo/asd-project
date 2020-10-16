const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user',
    required: true
  },
  type: {
    type: String,
    enum: ['Adult', 'Concession', 'Child'],
    default: 'Adult'
  },
  balance: {
    type: Number,
    default: 0.00
  },
  issued: {
    type: Date,
    default: Date.now()
  },
  balanceThreshold: {
    type: Number,
    default: -1
  }
});

module.exports = User = mongoose.model('card', CardSchema);