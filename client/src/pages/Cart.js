import React, { useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/shop/CartItem';
import CartCheckout from '../components/shop/CartCheckout';
import HeadingSection from '../components/heading/HeadingSection';
import FeaturedProducts from '../components/shop/FeaturedProducts';

function Cart() {
  const { cart } = useSelector(state => ({
    cart: state.cart.cart,
  }));
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="flex-container">
      <div className="semi-full">
      <h2 className="cart__heading">Your Cart</h2>
        <div className="cart__item cart__info">
          <div className="cart__delete"> </div>
          <div className="cart__img">Image</div>
          <div className="cart__item_title">Title</div> 
          <p className="origin">Origin</p>
          <div className="quantity">Quantity</div>
          <div className="price">Price</div>
        </div>
        {cart.length === 0 ? (
          <Fragment>
            <div
              className="cart__item"
              style={{justifyContent:"center"}}
            >
              <div>Your Cart Is Empty!</div>
            </div>
          </Fragment>
          ) : ( 
          cart.map((cartItem, key) => 
              <CartItem
                key={key}
                item={cartItem.item}
                quantity={cartItem.quantity}
              />
            )
          )}
        {cart.length === 0 ? null : <CartCheckout cart={cart} />}
        </div>
      <HeadingSection mainTxt="Featured Products" secondaryTxt="特色產品" />
      <FeaturedProducts />
    </div>
  )
}
export default Cart
