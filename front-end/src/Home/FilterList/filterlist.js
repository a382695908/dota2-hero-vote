import React, { Component } from 'react';
//import FilterItem from '../FilterItem/filteritem';

class FilterList extends Component{
	state = {
		data:[
		    {
		    	id:1,
		    	value:'力量',
		    	type:'attr'
		    },{
		    	id:2,
		    	value:'智力',
		    	type:'attr'
		    },{
		    	id:3,
		    	value:'敏捷',
		    	type:'attr'
		    },{
		    	id:4,
		    	value:'近程',
		    	type:'attack'
		    },{
		    	id:5,
		    	value:'远程',
		    	type:'attack'
		    }
		]
	}
	doFilter(id){
		console.log(id);
	}
	renderFilter(){
		let attrHtml = [];
		let attackHtml = [];
		let that = this;
		this.state.data.forEach(function(item,idx){
			(item.type === 'attr') && attrHtml.push(
				<div onClick={that.doFilter.bind(this,item.id)} key={idx}>{item.value}</div>
			);
			(item.type === 'attack') && attackHtml.push(
				<div onClick={that.doFilter.bind(this,item.id)}  key={idx}>{item.value}</div>
			);
		})
		return (
		    <div>
		        <div>属性偏向</div>
		        <div>
		            {attrHtml}
		        </div>
		        <div>攻击距离</div>
		        <div>
		            {attackHtml}
		        </div>
		    </div>
		)
	}
	render(){
		return (
			<div>
			    <div>
			        {this.renderFilter()}
			    </div>
			</div>
		)
	}
}
export default FilterList;