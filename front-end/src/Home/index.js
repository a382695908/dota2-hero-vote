import React, { Component } from 'react';
import './app.less';
import FilterList from './FilterList/filterlist';
import HerosList from './HerosList/heroslist';

class Home extends Component {
  render() {
    return (
    	<div>
    	    <FilterList />
            <HerosList />
        </div>
    );
  }
}

export default Home;