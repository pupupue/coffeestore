const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Article = require('../../models/Article');
const FeaturedArticle = require('../../models/FeaturedArticle');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/ftarticle
// @desc     Add a featured article
// @access   Private
router.post(
  '/',
  [auth, [
      check('articleId', 'Article is required').not().isEmpty(),
      check('featuredImg', 'Featured image is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      articleId,
      featuredImg
    } = req.body;

    try {
      //check if article exists
      const article = await Article.findById(articleId);
      if (!article) {
        return res.status(404).json({ msg: 'Article not found' })
      }

      //check if featured article exists
      const ftarticle = await FeaturedArticle.findById(articleId);
      if (ftarticle) {
        return res.status(404).json({ msg: 'Article already featured' })
      }

      const newFeaturedArticle = new FeaturedArticle({
        articleId,
        featuredImg
      });

      const featuredArticle = await newFeaturedArticle.save();

      res.json(featuredArticle);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/ftarticle
// @desc     Get all articles
// @access   Public
router.get('/', [], async (req, res) => {
  try {
    //get all featured articles
    const ftarticles = await FeaturedArticle.find();
    //get all ft article ids
    const ftarticlesobject = await Promise.all(ftarticles.map(async (ftarticle) => {
      let article = await Article.findById(ftarticle.articleId);
        if (article) {
          let obj = {};
          obj.article = article;
          obj.featuredImg = ftarticle.featuredImg;
          obj._id = ftarticle._id;
          return obj;
        }
    }));
    res.json(ftarticlesobject);
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
