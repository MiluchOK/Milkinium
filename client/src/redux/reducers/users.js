import initialState from './initialState';
import actionTypes from '../actions/actionTypes';

export default function stuff(state = initialState.projects, action) {
  let newState;
  switch (action.type) {
    case actionTypes.SIGN_IN_FULFILLED:
      localStorage.setItem('token', action.payload.token);
      return state;
    default:
      return state;
  }
}
