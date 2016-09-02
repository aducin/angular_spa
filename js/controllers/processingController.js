angular.module('ZappApp.ProcessingController', [])

.controller('ProcessingController', ["$scope", '$routeParams', function($scope, $routeParams) {
	$scope.processingActive = true;	
	$scope.processing = [];
	$scope.processing.active = [];
	
	var currentTarget = $routeParams.target;
	if (currentTarget != undefined) {
		$scope.processing.active[currentTarget] = true;
	} else {
		$scope.processing.active.liste = true;
	}
}])