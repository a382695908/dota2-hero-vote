/**
 * Created by yyj on 11/28/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Checkbox from 'material-ui/Checkbox';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
// import Dialog from 'material-ui/Dialog';
// import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  state={
    login: false
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ul className="nav">
           <li><Link to="/index">index</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/login">login</Link></li>
           <li><Link to="/logout">logout</Link></li>
          </ul>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
