angular.module('ZappApp.ContractsController', [])

.controller('ContractsController', ["$scope", '$stateParams', function($scope, $stateParams) {
	$scope.contractsActive = true;	
	$scope.contract = [];
	$scope.contract.active = [];
	
	var currentTarget = $stateParams.target;
	if (currentTarget != undefined) {
		$scope.contract.active[currentTarget] = true;
		$scope.contract.bottomLinks = true;
	} else {
		$scope.contract.active.liste = true;
	}
}])