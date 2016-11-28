/**
 * Created by yyj on 11/24/16.
 */


import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router';

import App from './app'; //首字母小写就是文件，大写是目录
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';


const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    { path: '*', component: NoMatch },
  ]
};

render(<Router history={hashHistory} routes={routes}></Router>, document.getElementById('root'));
