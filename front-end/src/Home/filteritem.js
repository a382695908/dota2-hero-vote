import React, { Component } from 'react';

class FilterItem extends Component{
	doFilter(id){
		console.log(id);
	}
	render(){
		return (
			<div className="filter-item mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.doFilter.bind(this,this.props.data.id)}>{this.props.data.value}</div>
		)
	}
}
export default FilterItem;