'use strict';

angular.module('App.controllers',[]).config(function ($stateProvider, $urlRouterProvider) {

	location.hash = '#/';

	$stateProvider

		.state('main', {
			url        : '/pages/main',
			templateUrl: 'views/main.html',
			controller : 'MainCtrl'
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/pages/main');

})