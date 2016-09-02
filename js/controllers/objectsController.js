angular.module('ZappApp.ObjectsController', [])

.controller('ObjectsController', ["$scope", '$routeParams', '$location', function($scope, $routeParams, $location) {
	$scope.active = [];
	$scope.active.objectActive = true;
	$scope.object = [];
	$scope.object.active = [];

	var currentTarget = $routeParams.target;
	if (currentTarget != undefined) {
		$scope.object.active[currentTarget] = true;
		$scope.object.bottomLinks = true;
		
	} else {
		$scope.object.active.liste = true;
	}
}])