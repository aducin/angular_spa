angular.module('ZappApp.ObjectsController', [])

.controller('ObjectsController', ["$scope", '$stateParams', '$location', '$q', 'objectModel', 'apiDates', 
	    function($scope, $stateParams, $location, $q, objectModel, apiDates) {
	$scope.active = [];
	$scope.active.objectActive = true;
	$scope.object = [];
	$scope.object.urlId = 0;
	$scope.object.id = '';
	$scope.object.data = [];
	$scope.object.name = '';
	$scope.object.text = '';
	$scope.object.active = [];
	$scope.object.list = [];
	$scope.object.sort;
	$scope.object.sortType = 'name';
	$scope.object.sortAsc = false;
	$scope.object.sortDesc = true;
	$scope.object.sortReverse = false;
	$scope.object.art = [];
	$scope.object.building = [];
	
	function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
	
	function search() {
		var id = $scope.object.id;
		var name = $scope.object.name;
		var text = $scope.object.text;
		objectModel.getObjectTable($scope, id, name, text)
		.then(function(response){
			  if (response.data.length != 0) {
				  $scope.object.list = response.data;
				  console.log($scope.object.list);
			  }  else {
				  delete($scope.object.list);
			  }
		})
	}
	
	var currentId = $stateParams.id;
	if (currentId != undefined) {
		$scope.object.bottomLinks = true;
		$scope.object.active.liste = false;
		$scope.object.active.object = true;
		if (isNumber(currentId) === true) {
			  $scope.object.urlId = currentId;
		} else { 
			  $location.path( "/objects" );
		}
		if ($scope.object.active.object === true) {
			var art = objectModel.getObjectArt($scope);
			var building = objectModel.getObjectBuilding($scope);
			var data = objectModel.getFullObjectTable($scope, currentId);
			$q.all([
				art,
				building,
				data
			]).then(function(response){
				$scope.object.art = response[0].data;
				$scope.object.building = response[1].data;
				if (response[2].data.success === true) {
					$scope.object.data = response[2].data;
					$scope.object.data.art = $scope.object.art[$scope.object.data.art];
					$scope.object.data.building = $scope.object.building[$scope.object.data.building];
				}
			});
		}
	} else {
		search();
		$scope.object.active.liste = true;
	}
	
	$scope.object.activeChange = function(bookmark) {
		$scope.object.active = [];
		$scope.object.active[bookmark] = true;
	}
	
	$scope.search = function() {
		search();
	}
	
	$scope.object.sort = function(name) {
		  if ($scope.object.sortType == name) {
			  $scope.object.sortReverse = !$scope.object.sortReverse;
			  if ($scope.object.sortAsc === false) {
				    $scope.object.sortAsc = true;
			  } else if ($scope.object.sortAsc === true) {
				    $scope.object.sortAsc = false;
			  }
		  }
		  $scope.object.sortType = name;
	}
}])