angular.module('ZappApp.CockpitController', [])

.controller('CockpitController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
	  $scope.active = [];
	  $scope.active.cockpitActive = true;
	  $scope.table = [];
	  $scope.sort = '';
	  $scope.sortType  = 'text';
	  $scope.sortReverse  = false;
	  
	  
	  $http.get('http://local.example/json.php')
	  .then(function(response){
		  if (response.data.length != 0) {
			  $scope.table = response.data;
		  }  
	  })
	  
	  $scope.sort = function(name) {
	      if ($scope.sortType == name) {
		    $scope.sortReverse = !$scope.sortReverse;
	      }
	      $scope.sortType = name;
	  }
}]);