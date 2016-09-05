angular.module('ZappApp.CockpitController', [])

.controller('CockpitController', ["$scope", '$http', '$routeParams', '$location', '$q', 'cockpitModel', 
	function($scope, $http, $routeParams, $location, $q, cockpitModel) {
	$scope.active = [];
	$scope.active.cockpitActive = true;
	$scope.firstTable = [];
	$scope.secondTable = [];
	$scope.thirdTable = [];
	$scope.sort = '';
	$scope.sortType = [];
	$scope.sortType['first'] = 'text';
	$scope.sortType['second'] = 'text';
	$scope.sortType['third'] = '';
	$scope.sortReverse = [];
	$scope.sortReverse['first'] = false;
	$scope.sortReverse['second'] = false;
	$scope.sortReverse['third'] = false;
	$scope.sortAsc = [];
	$scope.sortAsc['first'] = false;
	$scope.sortAsc['second'] = false;
	$scope.sortAsc['third'] = false;
	$scope.sortDesc = []; 
	$scope.sortDesc['first'] = true;
	$scope.sortDesc['second'] = true;
	$scope.sortDesc['third'] = true;
	  
	var firstTable = cockpitModel.getCockpitTable($scope, 'aufgaben')
	var secondTable = cockpitModel.getCockpitTable($scope, 'storungen')	  
	var thirdTable = cockpitModel.getCockpitTable($scope, 'vertrag')
	$q.all([
		firstTable,
		secondTable,
		thirdTable
	]).then(function(response){
		if (response[0].data.length != 0 || response[1].data.length != 0 || response[2].data.length != 0) {
			  $scope.firstTable = response[0].data;
			  $scope.secondTable = response[1].data;
			  $scope.thirdTable = response[2].data;
		}  
	})
	  
	$scope.sort = function(table, name) {
	        if ($scope.sortType[table] == name) {
		        $scope.sortReverse[table] = !$scope.sortReverse[table];
			if ($scope.sortReverse[table] === true) {
				     $scope.sortAsc[table] = true;
				     $scope.sortDesc[table] = false;
			} else if ($scope.sortReverse[table] === false) {
				     $scope.sortAsc[table] = false;
	                             $scope.sortDesc[table] = true;
			}
	        }
	        $scope.sortType[table] = name;
	}
}]);