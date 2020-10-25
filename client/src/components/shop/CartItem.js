import React from 'react'
import { useDispatch } from 'react-redux';
import { updateCart, deleteFromCart } from '../../store/actions/cart';

function CartItem({item, quantity}) {
  const dispatch = useDispatch();
  const imgPath = process.env.PUBLIC_URL +'/images/';

  return (
    <div className="cart__item">
      <div
        className="cart__delete"
        onClick={() => {
          dispatch(deleteFromCart(item._id))
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50" overflow="visible" strokeWidth="10" strokeLinecap="round">
          <line x2="50" y2="50" />
          <line x1="50" y2="50" />
        </svg>
      </div>
      <img
        src={imgPath + item.imgUrl + '-large.png'}
        srcSet={imgPath + item.imgUrl + '-small.png 352w,'
        + imgPath + item.imgUrl + '-medium.png 768w,'
        + imgPath + item.imgUrl + '-large.png 1200w,'}
        alt=""
      />
      <div className="cart__item_titles">
        <p>{item.titles['ENG']}</p>
        <p>{item.titles['ZH']}</p>
      </div> 
      <p className="origin">{item.origin}</p>
      <div className="counter">
        <div
          className="counter__down"
          onClick={() => {
            if (quantity > 1) {
              let newQuantity = quantity - 1;
              dispatch(updateCart({item, quantity: newQuantity}))
            }
          }}
        >
          -
        </div>
        <p className="amount">{quantity}</p>
        <div
          className="counter__up"
          onClick={() => {
            let newQuantity = quantity + 1;
            dispatch(updateCart({item, quantity: newQuantity}))
          }}
        >
          +
        </div>
      </div>
      <div className="price">${(quantity*item.price).toFixed(2)}</div>
    </div>
  )
}

export default CartItem
