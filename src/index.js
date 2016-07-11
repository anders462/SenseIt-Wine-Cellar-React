//Third Party JS files
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

//own JS files
import routes from './routes';
import reducers from './reducers';
import { API_URL } from './actions/index';
import { AUTH_USER, UNAUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension());

function isAuthenticated(){
  if (!localStorage.getItem('token')){
    console.log("no token");
    store.dispatch({type:UNAUTH_USER});
    return;
  }
    axios.get(`${API_URL}/users/me`,{
      headers: { "x-access-token": localStorage.getItem('token') }
    })
      .then( (response) => {
        store.dispatch({type:AUTH_USER});
        //browserHistory.push('/dashboard');
      })
      .catch((error) => {
        store.dispatch({type:UNAUTH_USER});
      })
};

//check if users is authenicated aka has a valid token
//by accessing /users/me with token if token exist
isAuthenticated();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
