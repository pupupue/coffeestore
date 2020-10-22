const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  titles: {
    type: Map,
    of: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  weight: {
    type: Map,
    of: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('products', ProductSchema);
