/**
 * Created by yyj on 11/28/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './sign-up.less';

class SignUp extends Component {

  constructor(props) {
    super();// props
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email     : '',
      password  : '',
      confirmpwd: ''
    }
  }

  handleChange() {
    // console.log(this.refs)
    // add validation
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('email', this.refs.email.value);
    console.log('password', this.refs.password.value);
    console.log('confirmpwd', this.refs.confirmpwd.value);
  }

  render() {
    return (
      <div className="page-sign-up view-center-box">
        <h5>join and vote</h5>
        <form noValidate onSubmit={this.handleSubmit}>
          <div className="mdl-grid">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input"
                     type="text" id="email"
                     onChange={this.handleChange}
                     ref="email"/>
              <label className="mdl-textfield__label" htmlFor="email">email</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="password" ref="password"/>
              <label className="mdl-textfield__label" htmlFor="password">password</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="password" id="confirmpwd" ref="confirmpwd"/>
              <label className="mdl-textfield__label" htmlFor="confirmpwd">confirm password</label>
            </div>
          </div>
          <div className="from-action mdl-grid">
            <Link to="/login" className="mdl-button mdl-js-button mdl-button--fab mdl-button--icon">
              <i className="material-icons">keyboard_arrow_left</i>
            </Link>
            <input type="submit"
                   className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored"
                   value="Continue"/>
          </div>

        </form>
      </div>
    );
  }
}

// 联合登录
SignUp.propTypes = {
  githubId: React.PropTypes.string
};

export default SignUp;
