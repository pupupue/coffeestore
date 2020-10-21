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

