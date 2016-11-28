'use strict'

module.exports = {
	homePage:function(req,res){
		console.log('SEND HOME');
		res.set({
			'Access-Control-Allow-Origin':'*'
		});
		res.send('hello world');
	}
}