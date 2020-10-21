import api from '../../utils/api';
import { ARTICLE } from '../types';

const {
  CREATE,
  CREATE_FEATURED,
  CREATE_INTRO,
  LOAD_ALL,
  LOAD_ALL_FEATURED,
  GET_ALL_FEATURED,
  LOAD_ALL_INTRO,
  LOAD_ONE,
  DELETE,
  UPDATE,
  ERROR,
} = ARTICLE;

// Create ARTICLE
export const createArticle = formData => async dispatch => {
  try {
    const res = await api.post('/article', formData);

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

// Create FEATURED ARTICLE
export const createFtArticle = formData => async dispatch => {
  try {
    const res = await api.post('/ftarticle', formData);

    dispatch({
      type: CREATE_FEATURED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Create INTRO ARTICLE
export const createIntro = formData => async dispatch => {
  try {
    const res = await api.post('/ftarticle/intro', formData);

    dispatch({
      type: CREATE_INTRO,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Get all ARTICLES
export const getAllArticles = () => async dispatch => {
  try {
    const res = await api.get('/article');

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

// clean errors
export const resetError = () => async dispatch => {
  dispatch({
    type: ERROR,
    payload: null
  });
};

// Get all FEATURED ARTICLE REF
export const getAllFtArticles = () => async dispatch => {
  try {
    const res = await api.get('/ftarticle');

    dispatch({
      type: GET_ALL_FEATURED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Get FEATURED ARTICLE CONTENT
export const getAllFtArticleContent = () => async dispatch => {
  try {
    const res = await api.get('/ftarticle/articles');
    dispatch({
      type: LOAD_ALL_FEATURED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Get INTRO CONTENT
export const getAllIntro = () => async dispatch => {
  try {
    const res = await api.get('/ftarticle/intro');
    dispatch({
      type: LOAD_ALL_INTRO,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
    });
  }
};

// Get ARTICLE
export const getArticle = id => async dispatch => {

  try {
    const res = await api.get(`/article/${id}`);

    dispatch({
      type: LOAD_ONE,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status } 
    });
  }
};

// Delete ARTICLE
export const deleteArticle = id => async dispatch => {

  try {
    await api.delete(`/article/${id}`);

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

// update ARTICLE
export const updateArticle = ({id, formData}) => async dispatch => {
  try {
    const res = await api.put(`/article/${id}`, formData);

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