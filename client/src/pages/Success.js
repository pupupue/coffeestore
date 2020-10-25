import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sellCart } from '../store/actions/cart';

function Success() {
  const dispatch = useDispatch();
  const { cart, sold } = useSelector(state => ({
    sold: state.cart.sold,
    cart: state.cart.cart,
  }));
  
  useEffect(() => {
    if (sold) {
      dispatch(sellCart(cart))
    }
  }, [sold, cart, dispatch]);

  return (
    <div className="stripe pattern-cross-dots-xl">
      <div className="stripe__form">
        <h2 style={{
          textAlign:"center",
          marginBottom: "1.5rem"
        }}
        >
          Success!
        </h2>
        <h2 style={{
          textAlign:"center",
          marginBottom: "12rem"
        }}
        >
          Thank You for purchasing from Us!
        </h2>
        <Link 
          style={{
            textDecoration: "none",
            color: "#d27a52",
            fontSize: "2rem",
          }}
          to={`/shop`}
        >
          To Shop
        </Link>
      </div>
    </div>
  )
}

export default Success
