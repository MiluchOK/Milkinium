import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projects from './projects';
import users from './users';

const rootReducer = combineReducers({
  projects,
  users,
  form: formReducer
});

export default rootReducer;
