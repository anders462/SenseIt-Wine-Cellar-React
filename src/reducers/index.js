import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form: formReducer,  //could use form only in ES6
  auth: authReducer
});

export default rootReducer;
