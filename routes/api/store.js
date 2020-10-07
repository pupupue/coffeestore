const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Store = require('../../models/Store');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/store
// @desc     Create a store
// @access   Private
router.post(
  '/',
  [auth, [
      check('name', 'Name is required').not().isEmpty(),
      check('address', 'Address is required').not().isEmpty(),
      check('latlan', 'Latlan are required').not().isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {  
      name,
      address,
      latlan,
      imgUrl = "",
    } = req.body;

    try {

      const newStore = new Store({
        name,
        address,
        latlan,
        imgUrl: imgUrl,
      });

      const store = await newStore.save();

      res.json(store);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/store
// @desc     Get all store
// @access   Public
router.get('/', [], async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/store/:id
// @desc     Get store by ID
// @access   Public
router.get('/:id', [ checkObjectId('id') ], async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    
    if (!store) {
      return res.status(404).json({ msg: 'Store not found' })
    }

    res.json(store);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/store/:id
// @desc     Delete a store
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);

    if (!store) {
      return res.status(404).json({ msg: 'Store not found' });
    }

    // Check user
    // if (article.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }

    await store.remove();

    res.json({ msg: 'Store removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


// @route    PUT api/store/img/:id
// @desc     update an store img
// @access   Private
router.put('/img/:id', [auth, checkObjectId('id')], async (req, res) => {
  
  const { imgUrl } = req.body;

  try {
    let store = await Store.findById(req.params.id);

    if (!store) {
      return res.status(404).json({ msg: 'Store not found' });
    }

    // Check user
    // if (article.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }

    //update
    store = await Store.findOneAndUpdate(
      { _id: req.params.id }, //filter
      { imgUrl: imgUrl }, //update
      { new: true, upsert: true } //upsert new
    );
    res.json(store);

  } catch (err) {
    console.error(err.message); 
    res.status(500).send('Server Error');
  }
});



module.exports = router;
