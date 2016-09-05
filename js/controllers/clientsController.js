angular.module('ZappApp.ClientsController', [])

.controller('ClientsController', ["$scope", '$stateParams', function($scope, $stateParams) {
	$scope.clientsActive = true;
	$scope.client = [];
	$scope.client.active = [];
	var currentTarget = $stateParams.target;
	if (currentTarget != undefined) {
		$scope.client.active[currentTarget] = true;
		$scope.client.bottomLinks = true;
	} else {
                $scope.client.active.liste = true;
	}
}])