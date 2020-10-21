import { ARTICLE } from '../types';

const {
  CREATE,
  CREATE_FEATURED,
  CREATE_INTRO,
  LOAD_ALL,
  GET_ALL_FEATURED,
  LOAD_ALL_FEATURED,
  LOAD_ALL_INTRO,
  LOAD_ONE,
  DELETE,
  UPDATE,
  ERROR,
} = ARTICLE;

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  error: null,
  articles: null,
  article: null,
  introarticles: null,
  introarticle: null,
  ftarticles: null,
  ftarticle: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL:
    case LOAD_ALL_FEATURED:
      return {
        ...state,
        loading: false,
        articles: payload
      };
    case LOAD_ALL_INTRO:
      return {
        ...state,
        loading: false,
        introarticles: payload
      };
    case GET_ALL_FEATURED:
      return {
        ...state,
        loading: false,
        ftarticles: payload
      };
    case LOAD_ONE:
    case CREATE:
      return {
        ...state,
        loading: false,
        article: payload
      };
    case CREATE_INTRO:
    return {
      ...state,
      loading: false,
      introarticle: payload
    };
    case CREATE_FEATURED:
      return {
        ...state,
        loading: false,
        ftarticle: payload
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        articles: state.articles.filter(article => article._id !== payload)
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        articles: state.articles.map(article => article._id === payload._id ? 
          payload : article)
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
