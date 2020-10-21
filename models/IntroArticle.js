const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntroArticleSchema = new Schema({
  articleId: {
    type: Schema.Types.ObjectId,
    ref: 'article'
  },
  titles: {
    type: Map,
    of: String,
    required: true
  },
  ftImg: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('introarticles', IntroArticleSchema);
