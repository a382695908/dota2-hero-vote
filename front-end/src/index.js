/**
 * Created by yyj on 11/24/16.
 */

// import 'material-design-lite/material.css'
import './index.less';

import 'fastclick';
import 'dialog-polyfill';// mdl use dialog tag
import React from 'react';
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router';
// import {Provider} from 'react-redux';

import App from './app'; //首字母小写就是文件，大写是目录
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import About from './About';
import NoMatch from './NoMatch';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'signup',
      component: SignUp
    },
    {
      path: 'login',
      component: Login
    },
    {
      path: 'about',
      component: About
    },
    {
      path: '*',
      component: NoMatch
    }
  ]
};

render(<Router history={hashHistory} routes={routes}></Router>, document.getElementById('root'));
