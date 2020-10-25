import api from '../../utils/api';
import { PRODUCT } from '../types';

const {
  CREATE,
  // CREATE_FT,
  LOAD_ALL,
  LOAD_ALL_FT,
  LOAD_AMOUNT,
  LOAD_ONE,
  SET_FILTERED,
  DELETE,
  UPDATE,
  ERROR,
  NULL
} = PRODUCT;

// Create PRODUCT
export const createProduct = formData => async dispatch => {
  try {
    const res = await api.post('/product', formData);
    dispatch({
      type: CREATE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR
    });
  }
};

// Get all products
export const getAllProducts = () => async dispatch => {
  try {
    const res = await api.get('/product');
    dispatch({
      type: LOAD_ALL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR
    });
  }
};

// Get x products
export const getProducts = (amount) => async dispatch => {
  try {
    const res = await api.get(`/product/count/${amount}`);
    dispatch({
      type: LOAD_AMOUNT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR
    });
  }
};

// Get all FEATURED PRODUCTS
export const getAllFtProducts = () => async dispatch => {
  try {
    const res = await api.get('/ftproduct');
    dispatch({
      type: LOAD_ALL_FT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// apply filter on products in shop
export const applyFilter = (type = NULL) => async dispatch => {
  try {
    dispatch({
      type: type,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// clean errors
export const resetError = () => async dispatch => {
  dispatch({
    type: ERROR,
    payload: null
  });
};

// Get product
export const getProduct = id => async dispatch => {

  try {
    const res = await api.get(`/product/${id}`);

    dispatch({
      type: LOAD_ONE,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Delete product
export const deleteProduct = id => async dispatch => {

  try {
    await api.delete(`/product/${id}`);
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

// update product
export const updateProduct = ({id, formData}) => async dispatch => {
  try {
    const res = await api.put(`/product/${id}`, formData);
    dispatch({
      type: UPDATE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// set filtered products array
export const setFilteredProducts = () => async dispatch => {
  try {
    dispatch({
      type: SET_FILTERED,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};