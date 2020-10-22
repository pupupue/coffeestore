import React from 'react';
import { Link } from 'react-router-dom';

function CartCheckout({cart}) {
  
  const calcTotal = (cart) => {
    let total = 0;
    if(cart.length === 0) {
      return total.toFixed(2);
    } else {
      cart.forEach((cartItem) => {
        total = total + cartItem.item.price * cartItem.quantity
      })
      return total.toFixed(2);
    }
  }

  return (
    <div className="cart__checkout">
      <div>
        <span>TOTAL:  ${calcTotal(cart)}</span>
      </div>
      <Link 
        className="button button-buy"
        to="/checkout"
      >
        Checkout
      </Link>
    </div>
  )
}

export default CartCheckout
