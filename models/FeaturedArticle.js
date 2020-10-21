const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeaturedArticleSchema = new Schema({
  articleId: {
    type: Schema.Types.ObjectId,
    ref: 'article'
  }
});

module.exports = mongoose.model('featuredarticles', FeaturedArticleSchema);
