/**
 * Created by yyj on 11/28/16.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import './no-match.less';

class NoMatch extends Component {
  render() {
    return (
      <div className="page-no-match view-center-box">
        <h2 className="text-shadow text-white">404</h2>
        <ul className="mdl-list action-list">
          <li>
            <div className="mdl-textfield mdl-js-textfield">
              <label htmlFor="search" className="mdl-textfield__label">search</label>
              <input type="text" className="mdl-textfield__input" id="search"/>
            </div>
          </li>
          <li className="mdl-list__item">
            <Link to="/">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">person</i>
                首页
              </span>
            </Link>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <i className="material-icons mdl-list__item-icon">person</i>
              333
            </span>
          </li>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <i className="material-icons mdl-list__item-icon">person</i>
              Bob Odenkirk
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default NoMatch;
