import { CART } from '../types';
import api from '../../utils/api';

const {
  ADD,
  DELETE,
  UPDATE,
  ERROR,
  CREATE,
  SELL,
  SOLD,
} = CART;

// Add to cart
export const addToCart = formData => async dispatch => {
  const { item, quantity } = formData;

  let localcart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (localcart !== []) {
    localcart.push(formData)
    localStorage.setItem('cart', JSON.stringify(localcart))
  } else {
    localcart.push(formData)
    localStorage.setItem('cart', JSON.stringify(localcart))
  }

  try {
    dispatch({
      type: ADD,
      payload: { item: item, quantity: quantity }
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Create cart
export const createCart = () => async dispatch => {
  try {
    dispatch({
      type: CREATE,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// UPDATE cart
export const updateCart = formData => async dispatch => {
  const { item, quantity } = formData;

  let localcart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (localcart !== []) {
    const index = localcart.findIndex(cartItem => cartItem.item._id === item._id);
    let newCart = localcart;
    newCart[index] = formData;
    localStorage.setItem('cart', JSON.stringify(newCart))
  } else {
    //usermeddling
  }

  try {
    dispatch({
      type: UPDATE,
      payload: { item: item, quantity: quantity }
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// DELETE cart item
export const deleteFromCart = id => async dispatch => {

  let localcart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (localcart !== []) {
    let newCart = localcart.filter(cartItem => cartItem.item._id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart))
  } else {
    //usermeddling
  }

  try {
    dispatch({
      type: DELETE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// SELL cart
export const sellCart = (cart) => async dispatch => {
  localStorage.removeItem('cart');
  try {
    Promise.all(cart.map(async (cartItem) => {
      await api.put(`/product/sell/${cartItem.item._id}`, {quantity: cartItem.quantity})
    }))
    dispatch({
      type: SELL,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// SET CART SOLD
export const setCartSold = () => async dispatch => {
  try {
    dispatch({
      type: SOLD,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

