import { v4 as uuidv4 } from 'uuid';
import { ALERT } from '../types';

const {
  REMOVE,
  SET
} = ALERT;

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE, payload: id }), timeout);
};
