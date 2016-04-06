'use strict';

/**
 * @ngdoc function
 * @name IonicNumPad.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the IonicNumPad
 */
angular.module('IonicNumPad').controller('MainCtrl', function ($scope, numPad) {

	$scope.value = 100 * Math.random().toFixed(4);

	$scope.openModal = function () {
		numPad.open($scope.value).then(function (num) {
			$scope.value = num;
		});
	}

/*
	numPad.open($scope.value).then(function (num) {
		$scope.value = num;
	});
*/
});
