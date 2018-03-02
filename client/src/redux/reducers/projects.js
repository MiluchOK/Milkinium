import initialState from './initialState';
import {FETCH_PROJECTS} from '../actions/actionTypes';

export default function stuff(state = initialState.projects, action) {
  let newState;
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log('FETCH_PROJECTS Action')
      return action;
    default:
      return state;
  }
}