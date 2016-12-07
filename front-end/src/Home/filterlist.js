import React, { Component } from 'react';
import FilterItem from './filteritem';

class FilterList extends Component{
	state = {
		list:[
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
		    	value:'体质',
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
	render(){
		let attrHtml = [];
		let attackHtml = [];
		this.state.list.forEach(function(item,idx){
			(item.type === 'attr') && attrHtml.push(
				<FilterItem key={idx} data={item} />
			);
			(item.type === 'attack') && attackHtml.push(
				<FilterItem key={idx} data={item} />
			);
		})
		return (
		    <div className="filter-list clearfix">
		        <div className="filter-title">英雄属性</div>
		        <div className="filter-items">
		            {attrHtml}
		        </div>
		        <div className="filter-title">攻击类型</div>
		        <div className="filter-items">
		            {attackHtml}
		        </div>
		    </div>
		)
	}
}
export default FilterList;