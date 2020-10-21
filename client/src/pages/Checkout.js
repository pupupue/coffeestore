import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/shop/CheckoutForm";

const promise = loadStripe("pk_test_51HeKpLAahCxsuhnXgtVgFb8Lt93Dr45ts5BTVq9Rb6NHMlRSZmdJRlHW8iZA9mmqSTScWuXawFLJMc3kKYH4ZEht00HOfLnpxg");

function Checkout() {
  const { cart } = useSelector(state => ({
    cart: state.cart.cart,
  }));

  // if manual /checkout
  if (cart.length === 0) {
    return <Redirect to="/cart" />
  }
  
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Checkout
