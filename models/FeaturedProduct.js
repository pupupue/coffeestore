const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeaturedProductSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  }
});

module.exports = mongoose.model('featuredproducts', FeaturedProductSchema);
