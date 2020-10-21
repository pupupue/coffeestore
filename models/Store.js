const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  latlan: {
    type: Array,
    required: true
  },
  imgUrl: {
    type: String
  }
});

module.exports = mongoose.model('stores', StoreSchema);
