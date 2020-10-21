import api from '../../utils/api';
import { STORE } from '../types';

const {
  CREATE,
  LOAD_ALL,
  LOAD_ONE,
  DELETE,
  UPDATE,
  ERROR,
} = STORE;

// Create store
export const createStore = formData => async dispatch => {
  try {
    const res = await api.post('/store', formData);

    dispatch({
      type: CREATE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Get all stores
export const getAllStores = () => async dispatch => {
  try {
    const res = await api.get('/store');

    dispatch({
      type: LOAD_ALL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Get store
export const getStore = id => async dispatch => {

  try {
    const res = await api.get(`/store/${id}`);

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

// Delete store
export const deleteStore = id => async dispatch => {

  try {
    await api.delete(`/store/${id}`);

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

// update stores image
export const updateStoreImage = ({id, img}) => async dispatch => {
  console.log(img)
  await api.put(`/store/img/${id}`, img)
  try {
    const res = await api.put(`/store/img/${id}`, img);

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