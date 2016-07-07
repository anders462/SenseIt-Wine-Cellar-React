import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types';

const API_URL = 'http://localhost:8001';

export function signinUser({username,password}){
  //redux-thunk enable us to return a function with
  //dispatch as a parameter. Dispatch is what dispatch action inside redux
  //redux-thunk enable us to dispatch several actions at anytime
  return function(dispatch) {
    axios.post(`${API_URL}/users/login`,{ username, password} )
     .then((response) => {
       //if request is good...
       //update state to authenicated by
       //passing action to reducers
       dispatch({ type: AUTH_USER});
       //redirect to /dashboard
       browserHistory.push('/dashboard');
     })
     .catch((error) => {
       dispatch
     });
  }

}


//save jwt token (dont store in state)


//if request is breadcrumb
//show error message
