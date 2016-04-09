'use strict';

/**
 * @ngdoc overview
 * @name IonicNumPad
 * @description
 * # IonicNumPad
 *
 * Main module of the application.
 */
angular.module('IonicNumPad', ['ionic', 'App.controllers']).config(function (numPadProvider) {
	numPadProvider.submitText = 'Custom Submit Text';
	numPadProvider.maxValue = 300;
});
