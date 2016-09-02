angular.module('ZappApp.DatesController', [])

.controller('DatesController', ["$scope", '$routeParams', function($scope, $routeParams) {
	$scope.datesActive = true;
	$scope.dates = [];
	$scope.dates.active = [];
	
	var currentTarget = $routeParams.target;
	if (currentTarget != undefined) {
		$scope.dates.active[currentTarget] = true;
	} else {
		$scope.dates.active.dates = true;
	}
}])