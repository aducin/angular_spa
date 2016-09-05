angular.module('ZappApp.DatesController', [])

.controller('DatesController', ["$scope", '$stateParams', function($scope, $stateParams) {
	$scope.datesActive = true;
	$scope.dates = [];
	$scope.dates.active = [];
	
	var currentTarget = $stateParams.target;
	if (currentTarget != undefined) {
		$scope.dates.active[currentTarget] = true;
	} else {
		$scope.dates.active.dates = true;
	}
}])