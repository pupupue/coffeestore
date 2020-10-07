const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeaturedProductSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  },
  featuredImg: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('featuredproduct', FeaturedProductSchema);
