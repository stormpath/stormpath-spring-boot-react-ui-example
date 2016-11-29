import React from 'react';
import ReactDOM from 'react-dom';

import ReactStormpath, { Router, AuthenticatedRoute, LoginRoute } from 'react-stormpath';
import { Route, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';

ReactStormpath.init({

  endpoints: {
    login: '/signin',
    register: '/signup',
    forgotPassword: '/lostpass'
  }
});

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <AuthenticatedRoute path='/' component={MainPage} />
    <LoginRoute path='/login' component={LoginPage} />
    <Route path='/register' component={RegisterPage} />
    <Route path='/forgot' component={ForgotPage} />
  </Router>,
  document.getElementById('root')
);
