import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projects from './projects';

const rootReducer = combineReducers({
  projects,
  form: formReducer
});

export default rootReducer;