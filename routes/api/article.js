const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Article = require('../../models/Article');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/article
// @desc     Create a article
// @access   Private
router.post(
  '/',
  [auth, [
      check('text', 'Text is required').not().isEmpty(),
      check('heading', 'Heading is required').not().isEmpty(),
      check('title', 'Title is required').not().isEmpty(),
      check('tags', 'Tags are required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      text,
      heading,
      title,
      tags,
      imgUrl = "",
    } = req.body;

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newArticle = new Article({
        user: user.id, 
        text: text,
        heading: heading,
        title: title,
        tags: Array.isArray(tags)
          ? tags
          : tags.split(',').map((tags) => ' ' + tags.trim()),
        createdBy: user.name,
        imgUrl: imgUrl,
      });

      const article = await newArticle.save();

      res.json(article);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/article
// @desc     Get all articles
// @access   Public
router.get('/', [], async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/article/:id
// @desc     Get article by ID
// @access   Public
router.get('/:id', [ checkObjectId('id') ], async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    
    if (!article) {
      return res.status(404).json({ msg: 'Article not found' })
    }

    res.json(article);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/article/:id
// @desc     Delete a article
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ msg: 'Article not found' });
    }

    // Check user
    if (article.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await article.remove();

    res.json({ msg: 'Article removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


// @route    PUT api/article/:id
// @desc     update an article
// @access   Private
router.put('/:id', [auth, checkObjectId('id')], async (req, res) => {
  
  const articleFields = {};

  const {
    text,
    title,
    heading,
    tags,
    imgUrl
  } = req.body;

  if (text) articleFields.text = text;
  if (title) articleFields.title = title;
  if (heading) articleFields.heading = heading;
  if (tags) articleFields.tags = tags;
  if (imgUrl) articleFields.imgUrl = imgUrl;

  try {
    let article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ msg: 'Article not found' });
    }

    // Check user
    if (article.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    //update
    article = await Article.findOneAndUpdate(
      { _id: req.params.id }, //filter
      { $set: articleFields }, //update
      { new: true, upsert: true } //upsert new
    );
    res.json(article);

  } catch (err) {
    console.error(err.message); 
    res.status(500).send('Server Error');
  }
});



module.exports = router;
