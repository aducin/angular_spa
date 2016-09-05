angular.module('ZappApp.config', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/cockpit');
    
    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('cockpit', {
        url: '/cockpit',
        templateUrl: 'view/cockpit.html',
	controller: 'CockpitController'
    })
    
    .state('objects', {
        url: '/objects',
        templateUrl: 'view/objects.html',
	controller: 'ObjectsController'
    })
    
    .state('objects/:id', {
        url: '/objects/:id',
        templateUrl: 'view/objects.html',
	controller: 'ObjectsController'
    })
    
    .state('clients', {
        url: '/clients',
        templateUrl: 'view/clients.html',
	controller: 'ObjectsController'
    })
    
    .state('clients/:target', {
        url: '/clients/:target',
        templateUrl: 'view/clients.html',
	controller: 'ClientsController'
    })
    
     .state('contracts', {
        url: '/contracts',
        templateUrl: 'view/contracts.html',
	controller: 'ContractsController'
    })
    
    .state('contracts/:target', {
        url: '/contracts/:target',
        templateUrl: 'view/contracts.html',
	controller: 'ContractsController'
    })
    
    .state('processing', {
        url: '/processing',
        templateUrl: 'view/processing.html',
	controller: 'ProcessingController'
    })
    
    .state('processing/:target', {
        url: '/processing/:target',
        templateUrl: 'view/processing.html',
	controller: 'ProcessingController'
    })
    
    .state('dates', {
        url: '/dates',
        templateUrl: 'view/dates.html',
	controller: 'DatesController'
    })
    
    .state('dates/:target', {
        url: '/dates/:target',
        templateUrl: 'view/dates.html',
	controller: 'DatesController'
    })


}); // closes $routerApp.config()
/*
.config(['$routeProvider', function($routeProvider, $stateProvider, $urlRouterProvider){

                $routeProvider
                .when('/cockpit',{
				    templateUrl: "view/cockpit.html",
				    controller: "CockpitController",
			   })
                .when('/objects',{
				    templateUrl: "view/objects.html",
				    controller: "ObjectsController",
			   })
		.when('/objects/:target',{
				    templateUrl: "view/objects.html",
				    controller: "ObjectsController",
			   })
		.when('/clients',{
				    templateUrl: "view/clients.html",
				    controller: "ClientsController",
			   })
		.when('/clients/:target',{
				    templateUrl: "view/clients.html",
				    controller: "ClientsController",
			   })
		.when('/contracts',{
				    templateUrl: "view/contracts.html",
				    controller: "ContractsController",
			   })
		.when('/contracts/:target',{
				    templateUrl: "view/contracts.html",
				    controller: "ContractsController",
			   })
		.when('/processing',{
				    templateUrl: "view/processing.html",
				    controller: "ProcessingController",
			   })
		.when('/processing/:target',{
				    templateUrl: "view/processing.html",
				    controller: "ProcessingController",
			   })
		.when('/dates',{
				    templateUrl: "view/dates.html",
				    controller: "DatesController",
			   })
		.when('/dates/:target',{
				    templateUrl: "view/dates.html",
				    controller: "DatesController",
			   })
                .otherwise({redirectTo:'/cockpit'});
		

}])
*/