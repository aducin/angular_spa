angular.module('ZappApp.ClientsController', [])

.controller('ClientsController', ["$scope", '$routeParams', function($scope, $routeParams) {
	$scope.clientsActive = true;
	$scope.client = [];
	$scope.client.active = [];
	var currentTarget = $routeParams.target;
	if (currentTarget != undefined) {
		$scope.client.active[currentTarget] = true;
		$scope.client.bottomLinks = true;
	} else {
                $scope.client.active.liste = true;
	}
}])