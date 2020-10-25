import { CART } from '../types';

const {
  ADD,
  DELETE,
  UPDATE,
  ERROR,
  CREATE,
  SELL,
  SOLD
} = CART;

let localCart = JSON.parse(localStorage.getItem('cart'));
let cart = [];
if (localCart !== null) {
  cart = localCart;
}

const initialState = {
  loading: true,
  cart: cart,
  sold: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        loading: true,
        cart: [...state.cart, payload],
        sold: false
      }
    case DELETE:
      return {
        ...state,
        loading: true,
        cart: state.cart.filter(cartItem => cartItem.item._id !== payload) 
      }
    case UPDATE:
      const index = state.cart.findIndex(cartItem => cartItem.item._id === payload.item._id);
      const newCart = [...state.cart];
      newCart[index] = payload;
      return {
        ...state,
        loading: true,
        cart: newCart,
      }
    case SELL:
      return {
        ...state,
        cart: [],
        sold: false
      }
    case SOLD:
      return {
        ...state,
        sold: true 
      }
    case CREATE:
    case ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
