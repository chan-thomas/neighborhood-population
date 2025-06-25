const mongoose = require('mongoose');

const ZipSchema = new mongoose.Schema({
  _id: String,
  city: String,
  state: String,
  pop: Number,
  loc: {
    type: [Number],
    index: '2d'
  }
});

module.exports = mongoose.model('Zip', ZipSchema);
