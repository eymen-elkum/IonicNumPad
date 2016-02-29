'use strict';

/**
 * @ngdoc function
 * @name IonicNumPad.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the IonicNumPad
 */
angular.module('IonicNumPad').controller('MainCtrl', function ($scope, numPadService) {

	$scope.openModal = function () {
		numPadService.open();
	}

	numPadService.open().then(function (num) {
		console.log(num)
	});
});
