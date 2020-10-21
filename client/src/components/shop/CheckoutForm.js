import React, { useState, useEffect } from "react";
import api from '../../utils/api';
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { setCartSold } from '../../store/actions/cart';

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { cart } = useSelector(state => ({
    cart: state.cart.cart,
  }));

  useEffect(() => {
    async function fetch() {
      const res = await api.post('/create-payment-intent', { 
        items: cart 
      });
      setClientSecret(res.data.clientSecret);
    }
    if (!succeeded) {
      fetch();
    }
  }, [cart, succeeded]);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      await dispatch(setCartSold())
      setTimeout(() => {
        setRedirect(true)
      }, 2000);
    }
  };
  return (
    <div>
      {redirect ? (
        <Redirect to="/cart" /> 
      ) : (
        <div className="stripe">
        <form className="stripe__form" id="payment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
          <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
          <button
            disabled={processing || disabled || succeeded}
            id="submit"
            className="stripe__button"
          >
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay"
              )}
            </span>
          </button>
          {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Success
          </p>
        </form>
      </div>
    )}
  </div>
  );
}