/**
 * Created by yyj on 11/28/16.
 */
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Checkbox from 'material-ui/Checkbox';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
// import Dialog from 'material-ui/Dialog';
// import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      login: false,
      showLayout: true
    };
  }
  render() {
    let showLayout={};
    if(!this.state.showLayout){
      showLayout.display = 'none';
    }
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header" style={showLayout}>
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">hero-vote-react</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <IndexLink to="/" className="mdl-navigation__link" activeClassName="active">index</IndexLink>
              <Link to="/about" className="mdl-navigation__link" activeClassName="active">About</Link>
              <Link to="/login" className="mdl-navigation__link" activeClassName="active">login</Link>
              <Link to="/signup" className="mdl-navigation__link" activeClassName="active">signup</Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">hero-vote-react</span>
          <nav className="mdl-navigation">
            <IndexLink to="/" className="mdl-navigation__link" activeClassName="active">index</IndexLink>
            <Link to="/about" className="mdl-navigation__link" activeClassName="active">About</Link>
            <Link to="/login" className="mdl-navigation__link" activeClassName="active">login</Link>
            <Link to="/signup" className="mdl-navigation__link" activeClassName="active">signup</Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

export default App;
