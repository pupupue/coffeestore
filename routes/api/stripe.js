const express = require('express');
const router = express.Router();
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51HeKpLAahCxsuhnXwPkT5nkawZzYVQPtbYqngFQOjT73ZfWDN2IjWYm7joTgWxl8yXJGyrPHNxpkDW5lu1R8FX1500r9cowK3A");

const calculateOrderAmount = items => {
  let total = 0;
  items.forEach((cartItem) => {
    total = total + cartItem.item.price * cartItem.quantity
  })
  return total.toFixed(2)*100;
};

const setMetadata = items => {
  let metadata = "";
  items.forEach((cartItem) => {
    metadata += 
    'title: ' + cartItem.item.titles["ENG"] + ' ' +
    'quantity: ' + cartItem.quantity + ' ' +
    'price:' + cartItem.item.price + ';' + ' '
  })
  return metadata;
};
// @route    POST api/create-payment-intent
// @desc     create-payment-intent
// @access   Public
router.post('/', [], async (req, res) => {
    try {
      const { items } = req.body;
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        metadata: {items: setMetadata(items)},
        description: "coffee purchase"
      });
      res.json({
        clientSecret: paymentIntent.client_secret
      });
    } catch (error) {
      res.json({
        error: res.error
      });
    }
  }
);

module.exports = router;