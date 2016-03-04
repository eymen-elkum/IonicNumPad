'use strict';

/**
 * @ngdoc service
 * @name IonicNumPad.numPad/numPadService
 * @description
 * # numPad/numPadService
 * Service in the IonicNumPad.
 */
angular.module('IonicNumPad').provider('numpadConfig', function () {
	var config = {
		submitText: 'Set'
	};
	return {
		init: function (newConfig) {
			config = newConfig;
		},
		$get: function () {
			return {
				submitText: config.submitText
			};
		}
	};
});
