import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import About from './components/about';
import Contact from './components/contact';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
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
  <Route path="login" component={Login} />
  <Route path="register" component={Register} />
  <Route path="logout" component={Logout} />
  <Route path="*" component={Home} />
</Route>
);
