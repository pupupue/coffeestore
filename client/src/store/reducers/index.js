import { combineReducers } from 'redux';
import auth from './auth';
import cart from './cart';
import blink from './blink';
import alert from './alert';
import store from './store';
import article from './article';
import product from './product';

export default combineReducers({
  auth,
  cart,
  alert,
  blink,
  store,
  article,
  product
});
