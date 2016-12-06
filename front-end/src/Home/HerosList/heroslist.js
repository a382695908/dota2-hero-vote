import React, { Component } from 'react';
import HeroItem from '../HeroItem/heroitem';

class HerosList extends Component{
	// mock-data
	state = {
		list:[
		    {
		    	name:'英雄1',
		    	pic:'http://img6.bdstatic.com/img/image/smallpic/duorou1129.jpg',
		    	attack_type:2, // 攻击类型   1  近程   2  远程
		    	attr_type:3, // 属性   1  力量    2  智力    3  敏捷
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
		    }
		]
	}
	rendList(){
		let html = [];
		this.state.list.forEach(function(item,index){
			html.push(
				<HeroItem key={index} data={item}/>
            );
		});
		return (
			<div>{html}</div>
	    )
	}
	render(){
		return (
			<div>
			    {this.rendList()}
			</div>
		)
	}
}
export default HerosList;