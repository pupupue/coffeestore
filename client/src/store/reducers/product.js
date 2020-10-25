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
  NULL,
  SET_FILTERED,
  FILTER_ALL,
  FILTER_FEATURED,
  FILTER_PRICE_ASC,
  FILTER_PRICE_DESC,
  DONT_FILTER_BY
} = PRODUCT;

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  error: null,
  products: null,
  filteredproducts: null,
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
        products: payload,
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
    case SET_FILTERED:
    case FILTER_ALL:
      return {
        ...state,
        filteredproducts: state.products
      };
    case FILTER_FEATURED:
      return {
        ...state,
        filteredproducts: state.ftproducts
      };
    case FILTER_PRICE_ASC:
      var byPriceAsc = state.filteredproducts.slice(0);
      byPriceAsc.sort(function(a,b) {
          return parseFloat(a.price) - parseFloat(b.price);
      });
      return {
        ...state,
        filteredproducts: byPriceAsc
      };
    case FILTER_PRICE_DESC:
      var byPriceDesc = state.filteredproducts.slice(0);
      byPriceDesc.sort(function(a,b) {
          return parseFloat(b.price) - parseFloat(a.price);
      });
      return {
        ...state,
        filteredproducts: byPriceDesc
      };
    case NULL:
    case DONT_FILTER_BY:
      return {
        ...state,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload ? payload : null
      };
    default:
      return state;
  }
}
