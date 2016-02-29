'use strict';

/**
 * @ngdoc service
 * @name IonicNumPad.numPad/numPadService
 * @description
 * # numPad/numPadService
 * Service in the IonicNumPad.
 */
angular.module('IonicNumPad').service('numPadService', function ($ionicModal, $rootScope, $q) {

	//settings
	var deferred = $q.defer();
	var modal = false;
	var $scope = $rootScope.$new();

	//private functions
	$scope.num = 1;
	$scope.new = true;
	$scope.closeModal = function () {
		modal.hide();
		deferred.notify('modalClose');
	}

	$scope.finish = function () {
		modal.hide();
		deferred.resolve($scope.num);
	}

	$scope.set_point = function () {
		pr('print var');
		$scope.point = true;
	}

	$scope.clear = function () {
		pr('clear .....');
		$scope.new = true;
		$scope.num = '1';
	}

	$scope.set_num = function (num) {
		if (num === '.' && $scope.num.indexOf('.') !== -1) {
			return;
		}
		var newVal = parseFloat($scope.num + num);
		if ($scope.new || newVal > 100) {
			$scope.new = false;
			if (num === '.')
				$scope.num += num;
			else {
				$scope.num = num;
			}
		}
		else
			$scope.num += num;
	}

	//public API
	return {
		open: function (defaultNum) {
			$scope.num = defaultNum || 1;
			$scope.num = $scope.num.toString();
			$scope.new = true;

			if (modal) {
				modal.show();
			} else {
				$ionicModal.fromTemplateUrl('views/numpad.html', {
					scope    : $scope,
					animation: 'slide-in-up'
				}).then(function (m) {
					deferred.notify('modalReady');
					modal = m;
					modal.show();
				});
			}

			return deferred.promise;
		}
	}
});
