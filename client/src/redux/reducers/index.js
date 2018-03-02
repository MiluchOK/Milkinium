import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import projects from './projects';

const rootReducer = combineReducers({
  projects
});

export default rootReducer;