import { AUTH_USER, UNAUTH_USER } from '../actions/index';

export default function(state = {}, action){

  switch (action.type){
    case AUTH_USER:
      return { ...state,authenicated:true }
    case UNAUTH_USER:
      return { ...state, authenicated:false }
  }
  return state;
}
