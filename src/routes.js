import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import About from './components/about';
import Contact from './components/contact';
import Dashboard from './components/dashboard';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import SignOut from './components/auth/signout';
import Resources from './components/resources';
import Home from './components/home';
import requireAuthentication from './components/hoc_components/require_authentication';



export default (
<Route path='/' component={App}>
  <IndexRoute component={Home} />
  <Route path='about' component={About} />
  <Route path="contact" component={Contact} />
  <Route path="resources" component={Resources} />
  <Route path="dashboard" component={ requireAuthentication(Dashboard) } />
  <Route path="signin" component={SignIn} />
  <Route path="signup" component={SignUp} />
  <Route path="signout" component={SignOut} />
  <Route path="*" component={Home} />
</Route>
);
