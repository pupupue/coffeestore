const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeaturedArticleSchema = new Schema({
  articleId: {
    type: Schema.Types.ObjectId,
    ref: 'article'
  },
  featuredImg: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('featuredarticle', FeaturedArticleSchema);
