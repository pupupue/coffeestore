import React, { useEffect, useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/shop/CartItem';
import CartCheckout from '../components/shop/CartCheckout';
import HeadingSection from '../components/heading/HeadingSection';
import FeaturedProducts from '../components/shop/FeaturedProducts';
import { sellCart } from '../store/actions/cart';

function Cart() {
  const [succeeded, setSucceeded] = useState(false);
  const { cart, sold } = useSelector(state => ({
    cart: state.cart.cart,
    sold: state.cart.sold,
  }));
  const dispatch = useDispatch();
  //scroll top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (sold) {
      setSucceeded(true)
      dispatch(sellCart(cart))
    }
  }, [sold, cart, dispatch])

  return (
    <div className="flex-container">
      <div className="semi-full">
      <h2 className="cart__heading">Your Cart</h2>
        <div className="cart__item cart__info">
          <p className="cart__info_first">Product</p>
          <p className="origin">Origin</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        {succeeded ? (
          <div className="cart__item">
            Success!
          </div>
        ) : (
          null
        )}
        {cart.length === 0 ? (
          <Fragment>
            <div className="cart__item">
              Your Cart Is Empty!
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
