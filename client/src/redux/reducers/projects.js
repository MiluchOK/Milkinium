import _ from 'lodash';
import initialState from './initialState';
import actionTypes from '../actions/actionTypes';

export default function stuff(state = initialState.projects, action) {
  switch (action.type) {
      case actionTypes.GET_PROJECTS_FULFILLED:
        const h = _.keyBy(action.payload, '_id');
        state = state.set('projectsById', h);
        return state;
      case actionTypes.SELECT_PROJECT:
        state = state.set('currentProject', action.payload);
        return state;
    default:
      return state;
  }
}
