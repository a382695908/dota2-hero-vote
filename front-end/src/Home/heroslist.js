import React, { Component } from 'react';
import HeroItem from './heroitem';

class HerosList extends Component{
	// mock-data
	state = {
		list:[
		    {
		    	name:'英雄1',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2,
		    	attr_type:3,
		    },{
		    	name:'英雄2',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	k_type:1,
		    	attr_type:1,
		    },{
		    	name:'英雄3',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2,
		    	attr_type:3,
		    },{
		    	name:'英雄4',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	k_type:1,
		    	attr_type:1,
		    },{
		    	name:'英雄5',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2,
		    	attr_type:3,
		    },{
		    	name:'英雄6',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	k_type:1,
		    	attr_type:1,
		    },{
		    	name:'英雄7',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2,
		    	attr_type:3,
		    },{
		    	name:'英雄8',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2,
		    	attr_type:3,
		    },{
		    	name:'英雄9',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	k_type:1,
		    	attr_type:1,
		    },{
		    	name:'英雄10',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2,
		    	attr_type:3,
		    }
		]
	}
	render(){
		let html = [];
		this.state.list.forEach(function(item,index){
			html.push(
				<HeroItem key={index} data={item}/>
            );
		});
		return (
			<div className="heros-items">{html}</div>
	    )
	}
}
export default HerosList;