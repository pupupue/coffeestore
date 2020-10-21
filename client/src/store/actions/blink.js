import { v4 as uuidv4 } from 'uuid';
import { BLINK } from '../types';

const {
  REMOVE,
  SET
} = BLINK;


export const setBlink = (timeout = 2000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET,
    payload: { id }
  });

  setTimeout(() => dispatch({ type: REMOVE, payload: id }), timeout);
};
