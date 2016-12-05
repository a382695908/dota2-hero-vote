/**
 * Created by yyj on 11/28/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './signup.less';

class SignUp extends Component {
  render() {
    return (
      <div className="page-sign-up">
        <h5>join and vote</h5>
        <from className="" method="post" autoComplete="off" noValidate>
          <div className="mdl-grid">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="email"/>
              <label className="mdl-textfield__label" htmlFor="email">email</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="password"/>
              <label className="mdl-textfield__label" htmlFor="email">password</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="confirmpwd"/>
              <label className="mdl-textfield__label" htmlFor="confirmpwd">confirm password</label>
            </div>
          </div>
          <div className="from-action mdl-grid">
            <Link to="/login" className="mdl-button mdl-js-button mdl-button--fab mdl-button--icon" >
              <i className="material-icons">keyboard_arrow_left</i>
            </Link>
            <input type="submit"
                   className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored"
                   value="Continue"/>
          </div>

        </from>
      </div>
    );
  }
}

export default SignUp;
