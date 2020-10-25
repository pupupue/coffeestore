import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import api from '../../utils/api';
import isinvalidEmail from '../../utils/formValidators';
import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { setCartSold } from '../../store/actions/cart';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    succeeded: false,
    redirect: false,
    processing: '',
    email1: '',
    email2: '',
    address: '',
    city: '',
    country: '',
    name: '',
  });
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { cart } = useSelector(state => ({
    cart: state.cart.cart,
  }));

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

  useEffect(() => {
    async function fetch() {
      const res = await api.post('/create-payment-intent', { 
        items: cart,
        address: {
          line1: formData.address,
          city: formData.city,
          country: formData.country,
        },
        name: formData.name,
        email: formData.email1,
      });
      setClientSecret(res.data.clientSecret);
      }
      if (formData.processing || formData.succeeded || formData.email1 !== formData.email2) {
        fetch();
      }
    // cancel subscription to useEffect
  }, [
    cart,
    setClientSecret,
    formData.succeeded,
    formData.address,
    formData.city,
    formData.country,
    formData.processing,
    formData.name,
    formData.email1,
    formData.email2,
  ]);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setFormData({ ...formData, "processing": true });
    //confirm email
    const err = isinvalidEmail(formData.email1);
    if (err !== false) {
      setError(`${err.email}`);
      setFormData({ ...formData, "processing": false });
    } else {
      //email passed
      //confirm stripe
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });
      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setFormData({ ...formData, "processing": false });
      } else {
        setError(null);
        setFormData({ ...formData, "processing": false });
        setFormData({ ...formData, "succeeded": true });

        dispatch(setCartSold())
        setTimeout(() => {
          setFormData({ ...formData, "redirect": true });
        }, 2000);
      }
    }
  };

  if (formData.redirect) {
    return <Redirect to="/success" />
  }

  return (
  <div className="stripe pattern-cross-dots-xl">
    <form className="stripe__form" id="payment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.email1}
        className="input"
        onChange={(e) => setFormData({ ...formData, "email1": e.target.value })}
        placeholder="Enter email address"
      />
      <input
        type="text"
        value={formData.email2}
        style={(formData.email1 !== formData.email2)? {color: "#fa755a"} : null}
        className="input input__group"
        onChange={(e) => setFormData({ ...formData, "email2": e.target.value })}
        placeholder="Confirm email address"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        className="input"
        onChange={(e) => setFormData({ ...formData, "address": e.target.value })}
        placeholder="Address"
      />
      <input
        type="text"
        value={formData.city}
        className="input input__group"
        onChange={(e) => setFormData({ ...formData, "city": e.target.value })}
        placeholder="City"
      />
      <input
        type="text"
        value={formData.country}
        className="input input__group"
        onChange={(e) => setFormData({ ...formData, "country": e.target.value })}
        placeholder="Country"
      />
      <input
        type="text"
        value={formData.name}
        className="input"
        onChange={(e) => setFormData({ ...formData, "name": e.target.value })}
        placeholder="Full Name"
      />
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button
        disabled={formData.processing || disabled || formData.succeeded || formData.email1 !== formData.email2}
        id="submit"
        className="stripe__button"
      >
        <span id="button-text">
          {formData.processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert" style={{textAlign: "center"}}>
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={formData.succeeded ? "result-message" : "result-message hidden"}>
        Success
      </p>
    </form>
  </div>
  );
}