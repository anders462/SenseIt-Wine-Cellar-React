import { LOGIN_USER } from './types';
import axios from 'axios';

export function loginUser(user){

  const URL = 'http://localhost:8001/users';
  const request = axios.post(URL,user);

  return {
    type: LOGIN_USER,
    payload: request
  }

}
