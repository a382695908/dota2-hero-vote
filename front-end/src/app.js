/**
 * Created by yyj on 11/28/16.
 */
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class App extends Component {

  constructor(){
    super();
    this.state={
      login: false,
      showLayout: true,
      loading:true
    };
  }
  render() {
    let showLayout={};
    if(!this.state.showLayout){
      showLayout.display = 'none';
    }
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        {/*<div className="mdl-spinner mdl-js-spinner is-active"></div>*/}
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
        <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer__left-section">
            {/*<div className="mdl-logo">Title</div>*/}
            <ul className="mdl-mini-footer__link-list">
              <li><Link to="/about">About</Link></li>
              <li>备案号:123456</li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
