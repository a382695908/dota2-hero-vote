/**
 * Created by yyj on 11/24/16.
 */

import 'material-design-lite/material.css'
import './index.less';

import React from 'react';
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app'; //首字母小写就是文件，大写是目录
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import About from './About';
import NoMatch from './NoMatch';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'index', component: Home },
    { path: 'logout', component: Logout },
    { path: 'login', component: Login },
    { path: 'about', component: About },
    { path: '*', component: NoMatch },
  ]
};

injectTapEventPlugin();

render(<Router history={hashHistory} routes={routes}></Router>, document.getElementById('root'));
