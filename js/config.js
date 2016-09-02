angular.module('ZappApp.config', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
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