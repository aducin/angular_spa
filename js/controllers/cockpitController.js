angular.module('ZappApp.CockpitController', ['tableSort'])

.controller('CockpitController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
	  $scope.active = [];
	  $scope.active.cockpitActive = true;
	  $scope.table = [];
	  
	  $http.get('http://local.example/json.php')
	  .then(function(response){
		  if (response.data.length != 0) {
			  $scope.table = response.data;
		  }
	  })
}]);