const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Article = require('../../models/Article');
const FeaturedArticle = require('../../models/FeaturedArticle');
const IntroArticle = require('../../models/IntroArticle');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/ftarticle
// @desc     Add a featured article
// @access   Private
router.post(
  '/',
  [auth, [
      check('articleId', 'Article is required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      articleId,
    } = req.body;

    try {
      //check if article exists
      const article = await Article.findById(articleId);
      if (!article) {
        return res.status(404).json({ msg: 'Article not found' })
      }

      //check if featured article exists
      const ftarticle = await FeaturedArticle.find({ articleId: articleId });;
      if (ftarticle.length > 0) {
        return res.status(404).json({ msg: 'Article already featured' })
      }

      const newFeaturedArticle = new FeaturedArticle({
        articleId,
      });

      const featuredArticle = await newFeaturedArticle.save();

      res.json(featuredArticle);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/ftarticle/intro
// @desc     Add a intro article
// @access   Private
router.post(
  '/intro',
  [auth, [
      check('articleId', 'Article is required').not().isEmpty(),
      check('titles', 'Titles are required').not().isEmpty(),
      check('ftImg', 'Image is required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      articleId,
      titles,
      ftImg,
    } = req.body;

    try {
      //check if article exists
      const article = await Article.findById(articleId);
      if (!article) {
        return res.status(404).json({ msg: 'Article not found' })
      }

      //check if intro article exists
      const _introArticle = await IntroArticle.findById(articleId);
      if (_introArticle) {
        return res.status(404).json({ msg: 'Article already featured' })
      }

      const newIntroArticle = new IntroArticle({
        articleId,
        titles,
        ftImg,
      });

      const introArticle = await newIntroArticle.save();

      res.json(introArticle);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/ftarticle REF
// @desc     Get all articles
// @access   Public
router.get('/', [], async (req, res) => {
  try {
    //get all featured articles
    const ftarticles = await FeaturedArticle.find();
    res.json(ftarticles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/ftarticle/articles
// @desc     Get all article objects
// @access   Public
router.get('/articles', [], async (req, res) => {
  try {
    //get all featured articles
    const ftarticles = await FeaturedArticle.find();
    //get all ft article ids
    const articles = await Promise.all(ftarticles.map(async (ftarticle) => {
      let article = await Article.findById(ftarticle.articleId);
        if (article) {
          return article;
        }
    }));
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/intro
// @desc     Get all intro articles
// @access   Public
router.get('/intro', [], async (req, res) => {
  try {
    //get all featured articles
    const introArticles = await IntroArticle.find();

    res.json(introArticles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/ftarticle/:id
// @desc     Delete a article
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const ftarticle = await FeaturedArticle.findById(req.params.id);

    if (!ftarticle) {
      return res.status(404).json({ msg: 'Featured Article not found' });
    }

    await ftarticle.remove();

    res.json({ msg: 'Featured Article removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
