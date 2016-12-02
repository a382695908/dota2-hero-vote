/**
 * Created by yyj on 11/28/16.
 */
import React, {Component} from 'react';
import './login.less';

class Login extends Component {

  

  //http://virtserver.swaggerhub.com/yyjazsf/hero-vote/1.0.0/user/signin
  componentDidMount() {
    fetch('http://virtserver.swaggerhub.com/yyjazsf/hero-vote/1.0.0/user/signin',{
      method: 'POST',
      body: JSON.stringify({
        username: this.username.value,
        password: this.password.value
      })
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="login_main">
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="sample1" value="1111" ref={(ref) => this.username = ref} />
          <label className="mdl-textfield__label" htmlFor="sample1">用户名...</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="sample1" value="2222" ref={(ref) => this.password = ref} />
          <label className="mdl-textfield__label" htmlFor="sample1">密码...</label>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          登录
        </button>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
          撤销
        </button>
      </div>
    );
  }
}

export default Login;