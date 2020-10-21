import { BLINK } from '../types';

const {
  REMOVE,
  SET,
} = BLINK;

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET:
      return [...state, payload];
    case REMOVE:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
