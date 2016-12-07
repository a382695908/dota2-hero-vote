import React, { Component } from 'react';

class HeroItem extends Component{
	render(){
		return (
			<div className="hero-item">
			    <div className="hero-avator">
			        <img src={this.props.data.pic} alt="" />
			    </div>
			    <div className="hero-name">{this.props.data.name}</div>
			    <div className="hero-vote mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">投上一票</div>
            </div>
		)
	}
}
export default HeroItem;