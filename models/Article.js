const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  createdBy: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('articles', ArticleSchema);
