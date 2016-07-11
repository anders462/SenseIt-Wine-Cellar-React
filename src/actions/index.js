import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR } from './types';

export const API_URL = 'http://localhost:8001';

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
       //save jwt token (dont store in state)
       localStorage.setItem('token', response.data.token)
       //redirect to /dashboard
       browserHistory.push('/dashboard');
     })
     .catch((error) => {
       //if request is bad
       //show error message
       console.log(error)
       dispatch(authError(error.data.err.message));

     });
  }

}

export function signupUser(creds){
  return function(dispatch){
    axios.post(`${API_URL}/users/register`,creds)
      .then( (response) => {
        browserHistory.push('/signin');
      })
      .catch((error) => {
        dispatch(authError(error.data.err.message));
      });


  }

}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function signoutUser(){
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
