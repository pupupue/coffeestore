import { PRODUCT } from '../types';

const {
  CREATE,
  CREATE_FT,
  LOAD_ALL,
  LOAD_ALL_FT,
  LOAD_AMOUNT,
  LOAD_ONE,
  DELETE,
  UPDATE,
  ERROR,
} = PRODUCT;

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  error: null,
  products: null,
  ftproducts: null,
  product: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL:
    case LOAD_AMOUNT:
      return {
        ...state,
        loading: false,
        products: payload
      };
    case LOAD_ONE:
    case CREATE:
    case CREATE_FT:
      return {
        ...state,
        loading: false,
        product: payload
      };
    case LOAD_ALL_FT:
      return {
        ...state,
        loading: false,
        ftproducts: payload
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        products: state.products.filter(product => product._id !== payload)
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        products: state.products.map(product => product._id === payload._id ? 
          payload : product)
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
