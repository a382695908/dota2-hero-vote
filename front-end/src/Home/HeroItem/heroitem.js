import React, { Component } from 'react';

class HeroItem extends Component{
	render(){
		return (
			<div>
			    <img src={this.props.data.pic} alt="" />
			    <p>{this.props.data.name}</p>
            </div>
		)
	}
}
export default HeroItem;