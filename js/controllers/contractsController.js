angular.module('ZappApp.ContractsController', [])

.controller('ContractsController', ["$scope", '$routeParams', function($scope, $routeParams) {
	$scope.contractsActive = true;	
	$scope.contract = [];
	$scope.contract.active = [];
	
	var currentTarget = $routeParams.target;
	if (currentTarget != undefined) {
		$scope.contract.active[currentTarget] = true;
		$scope.contract.bottomLinks = true;
	} else {
		$scope.contract.active.liste = true;
	}
}])