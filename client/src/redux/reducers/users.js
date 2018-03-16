import initialState from './initialState';
import actionTypes from '../actions/actionTypes';
import authClient from '../../clients/authClient';

export default function stuff(state = initialState.projects, action) {
  let newState;
  switch (action.type) {
    case actionTypes.SIGN_IN_FULFILLED:
      const token = action.payload.data.token;
      authClient.saveToken(token);
      return state;
    default:
      return state;
  }
}
