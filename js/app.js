angular.module("ZappApp", [
	'ngRoute', 
	'ngSanitize', 
	'ngCookies',
	'ui.router',
	'tableSort',
	'ZappApp.config',
	'ZappApp.CockpitModel',
	'ZappApp.ObjectModel',
	'ZappApp.CockpitController',
	'ZappApp.ObjectsController',
	'ZappApp.ClientsController',
	'ZappApp.ContractsController',
	'ZappApp.ProcessingController',
	'ZappApp.DatesController'
])

.constant("apiDates", {
        "apiUrl": "http://local.example/",
        "apiToken": "modele-ad9bis.pl_token"
});