import initialState from './initialState';
import actionTypes from '../actions/actionTypes';

export default function stuff(state = initialState.projects, action) {
  let newState;
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS:
      console.log('FETCH_PROJECTS Action')
      return action;
    default:
      return state;
  }
}
