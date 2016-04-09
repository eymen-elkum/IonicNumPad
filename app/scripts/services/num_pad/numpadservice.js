'use strict';

/**
 * @ngdoc service
 * @name IonicNumPad.numPad/numPadService
 * @description
 * # numPad/numPadService
 * Service in the IonicNumPad.
 */
angular.module('IonicNumPad').provider('numPad', function ($injector) {

	var modal = false, q, rootScope, deferred, scope = {}, ionicModal;

	//default values
	this.submitText = 'Submit';
	this.maxValue = false;

	var setup = function ($injector, self) {
		//setup goes here
		if (modal === false) {
			rootScope = $injector.get('$rootScope');
			scope = rootScope.$new();
			q = $injector.get('$q');
			deferred = q.defer();
			ionicModal = $injector.get('$ionicModal');
			scope.num = 1;
			scope.new = true;

			scope.closeModal = function () {
				modal.hide();
				deferred.notify('modalClose');
			}

			scope.finish = function () {
				modal.hide();
				deferred.resolve(scope.num);
			}

			scope.set_point = function () {
				scope.point = true;
			}

			scope.clear = function () {
				scope.new = true;
				scope.num = '1';
			}

			scope.set_num = function (num) {
				if (num === '.' && scope.num.indexOf('.') !== -1) {
					return;
				}
				var newVal = parseFloat(scope.num + num);
				console.log(scope.maxValue);
				if (scope.new || (scope.maxValue && newVal > scope.maxValue)) {
					scope.new = false;
					if (num === '.')
						scope.num += num;
					else {
						scope.num = num;
					}
				}
				else
					scope.num += num;
			}

		}

	}

	this.$get = function ($http, $injector) {
		return {
			open      : function (defaultNum) {
				setup($injector, self);
				scope.submitText = this.submitText;

				console.log(this.maxValue);
				scope.num = defaultNum || 1;
				scope.num = scope.num.toString();
				scope.new = true;
				scope.maxValue = this.maxValue;

				if (modal) {
					modal.show();
				} else {
					ionicModal.fromTemplateUrl('views/numpad.html', {
						scope    : scope,
						animation: 'slide-in-up'
					}).then(function (m) {
						deferred.notify('modalReady');
						modal = m;
						modal.show();
					});
				}

				return deferred.promise;
			},
			submitText: this.submitText,
			maxValue  : this.maxValue
		}
	}
});
