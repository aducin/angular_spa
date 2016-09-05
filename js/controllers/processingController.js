angular.module('ZappApp.ProcessingController', [])

.controller('ProcessingController', ["$scope", '$stateParams', function($scope, $stateParams) {
	$scope.processingActive = true;	
	$scope.processing = [];
	$scope.processing.active = [];
	
	var currentTarget = $stateParams.target;
	if (currentTarget != undefined) {
		$scope.processing.active[currentTarget] = true;
	} else {
		$scope.processing.active.liste = true;
	}
}])