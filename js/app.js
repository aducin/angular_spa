angular.module("ZappApp", [
	'ngRoute', 
	'ngSanitize', 
	'ngCookies',
	'tableSort',
	'ZappApp.config',
	'ZappApp.CockpitController',
	'ZappApp.ObjectsController',
	'ZappApp.ClientsController',
	'ZappApp.ContractsController',
	'ZappApp.ProcessingController',
	'ZappApp.DatesController'
]);