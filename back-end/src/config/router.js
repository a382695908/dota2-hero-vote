'use strict'

var ctrl = require('../controller/index');

module.exports = function(router){
	router.get('/',ctrl.home.homePage);
}