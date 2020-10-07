const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const Product = require('../../models/Product');
const FeaturedProduct = require('../../models/FeaturedProduct');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/ftproduct
// @desc     Add a featured product
// @access   Private
router.post(
  '/',
  [auth, [
      check('productId', 'Product is required').not().isEmpty(),
      check('featuredImg', 'Featured image is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      productId,
      featuredImg
    } = req.body;

    try {
      //check if product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ msg: 'Product not found' })
      }

      //check if featured product exists
      const ftproduct = await FeaturedProduct.findById(productId);
      if (ftproduct) {
        return res.status(404).json({ msg: 'Product already featured' })
      }

      const newFeaturedProduct = new FeaturedProduct({
        productId,
        featuredImg
      });

      const featuredProduct = await newFeaturedProduct.save();
      res.json(featuredProduct);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/ftproduct
// @desc     Get all product
// @access   Public
router.get('/', [], async (req, res) => {
  try {
    //get all featured product
    const ftproducts = await FeaturedProduct.find();
    //get all ft product ids
    const ftproductobject = await Promise.all(ftproducts.map(async (ftproduct) => {
      let product = await Product.findById(ftproduct.productId);
        if (product) {
          let obj = {};
          obj.product = product;
          obj.featuredImg = ftproduct.featuredImg;
          obj._id = ftproduct._id;
          return obj;
        }
    }));
    res.json(ftproductsobject);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/ftproduct/:id
// @desc     Delete a product
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const ftproduct = await FeaturedProduct.findById(req.params.id);

    if (!ftproduct) {
      return res.status(404).json({ msg: 'Featured Product not found' });
    }

    await ftproduct.remove();

    res.json({ msg: 'Featured Product removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;
