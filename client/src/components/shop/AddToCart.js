import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateCart } from '../../store/actions/cart';
import { setBlink } from '../../store/actions/blink';

function AddToCart({item}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { cartItem } = useSelector(state => ({
    cartItem: state.cart.cart.filter(cartItem => cartItem.item._id === item._id),
  }))

  return (
    <div className="add-to-cart">
      <div className="counter">
        <div
          className="counter__down"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1)
            }
          }}
        >
          -
        </div>
        <p className="amount">{quantity}</p>
        <div
          className="counter__up"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </div>
      </div>
      <button 
        className="button button-buy"
        onClick={() => {if(cartItem.length === 0) {
          dispatch(addToCart({item, quantity}));
          dispatch(setBlink());
        } else {
          let newQuantity = cartItem[0].quantity + quantity;
          dispatch(updateCart({item, quantity: newQuantity}));
          dispatch(setBlink());
        }}}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default AddToCart
