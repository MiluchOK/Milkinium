import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projects from './projects';
import users from './users';
import current_user from './currentUser';

const rootReducer = combineReducers({
  projects,
  users,
  current_user,
  form: formReducer
});

export default rootReducer;
