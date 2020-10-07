const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Product = require('../../models/Product');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/product
// @desc     Create a product
// @access   Private
router.post(
  '/',
  [auth, [
      check('origin', 'origin is required').not().isEmpty(),
      check('type', 'type is required').not().isEmpty(),
      check('price', 'price is required').not().isEmpty(),
      check('imgUrl', 'Image is required').not().isEmpty(),
      check('description', 'description is required').not().isEmpty(),
      check('titles', 'titles is required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      origin,
      type,
      price,
      imgUrl,
      description,
      titles,
    } = req.body;

    try {

      const newProduct = new Product({
        origin,
        type,
        price,
        imgUrl,
        description,
        titles,
      });

      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/product
// @desc     Get all products
// @access   Public
router.get('/', [], async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/product/:id
// @desc     Get product by ID
// @access   Public
router.get('/:id', [ checkObjectId('id') ], async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' })
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/product/:id
// @desc     Delete a product
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Check user
    // // // // should be check if is admin or higher
    // if (product.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }

    await product.remove();

    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    PUT api/product/:id
// @desc     update an product
// @access   Private
router.put('/:id', [auth, checkObjectId('id')], async (req, res) => {
  
  const productFields = {};

  const {
    origin,
    type,
    price,
    imgUrl,
    description,
    titles,
  } = req.body;

  if (origin) productFields.origin = origin;
  if (type) productFields.type = type;
  if (price) productFields.price = price;
  if (imgUrl) productFields.imgUrl = imgUrl;
  if (description) productFields.description = description;
  if (titles) productFields.titles = titles;

  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }

    // Check user
    // Check if elavated user
    // if (product.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }

    //update
    product = await Product.findOneAndUpdate(
      { _id: req.params.id }, //filter
      { $set: productFields }, //update
      { new: true, upsert: true } //upsert new
    );
    res.json(product);

  } catch (err) {
    console.error(err.message); 
    res.status(500).send('Server Error');
  }
});



module.exports = router;
