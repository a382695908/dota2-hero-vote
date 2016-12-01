import React, { Component } from 'react';

class FilterList extends Component{
	construtor(props){
		//super(props);
	}

	state = {
		attr_type:[
		    {
		    	id:1,
		    	value:'力量'
		    },{
		    	id:2,
		    	value:'智力'
		    },{
		    	id:3,
		    	value:'敏捷'
		    }
		],
		attack_type:[
		    {
		    	id:1,
		    	value:'近程'
		    },{
		    	id:2,
		    	value:'远程'
		    }
		]
	}
	clickMe(e){
		console.log(e);
	}
	renderFilter(){
		let attrHtml = [];
		let attackHtml = [];
		this.state.attr_type.forEach(function(item,idx){
			attrHtml.push(
				<div key={idx}>{item.value}</div>
			)
		})
		this.state.attack_type.forEach(function(item,idx){
			attrHtml.push(
				<div key={idx+'1'}>{item.value}</div>
			)
		})
		return (
		    <div>
		        <div>
		            {attrHtml}
		        </div>
		        <div>
		            {attackHtml}
		        </div>
		    </div>
		)
	}
	render(){
		return (
			<div onClick={this.clickMe.bind(this)}>
			    <div>
			        {this.renderFilter()}
			    </div>
			</div>
		)
	}
}
export default FilterList;