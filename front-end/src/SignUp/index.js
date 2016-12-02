/**
 * Created by yyj on 11/28/16.
 */
import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <from className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="email" />
              <label className="mdl-textfield__label" htmlFor="email">邮箱...</label>
            </div>
          </div>
        </from>
      </div>
    );
  }
}

export default SignUp;
