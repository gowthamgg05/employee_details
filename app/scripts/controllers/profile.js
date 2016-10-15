'use strict';

/**
 * @ngdoc function
 * @name staffApp.controller:profileCtrl
 * @description
 * # profileCtrl
 * Controller of the staffApp
 */
angular.module('staffApp')
  .controller('profileCtrl', [function () {
	console.log('profile controller');
	this.selectedProfile = {
		"name" : "Anu",
		"division" : "Web",
		"team" : "Develop",
		"designation": "Project Engineer",
		"mobile_number" : "9865261321",
		"residence_number" : "0425785478",
		"company_email_id" : "gavedfvsygft@gmail.com",
		"personal_email_id" : "sbhdvjbvsdfv@gdbj.com"
	}
	
	this.selectedProfile.initial = getInitial(this.selectedProfile.name);
	
	function getInitial (name) {
		return name.substring(0, 1).toUpperCase();
	}
	
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
