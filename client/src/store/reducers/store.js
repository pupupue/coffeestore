import { STORE } from '../types';

const {
  CREATE,
  LOAD_ALL,
  LOAD_ONE,
  DELETE,
  UPDATE,
  ERROR,
} = STORE;

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  error: null,
  stores: null,
  store: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL:
      return {
        ...state,
        loading: false,
        stores: payload
      };
    case LOAD_ONE:
    case CREATE:
      return {
        ...state,
        loading: false,
        store: payload
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        stores: state.stores.filter(store => store._id !== payload)
      };
    case UPDATE:
      return {
        ...state,
        loading: false,
        stores: state.stores.map(store => store._id === payload._id ? 
          { ...store, imgUrl: payload.imgUrl } : store)
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
