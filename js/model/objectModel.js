angular.module('ZappApp.ObjectModel', [])

.service(
	"objectModel",
	function( $http, apiDates ) {
	this.getFullObjectTable = function ($scope, id) {
		var url = apiDates.apiUrl + 'json.php?origin=objekt&basic=false&id=' + id;
		return $http.get(url);
	}  
	this.getObjectArt = function ($scope) {
		var url = apiDates.apiUrl + 'json.php?origin=art';
		return $http.get(url);
	}
	this.getObjectBuilding = function ($scope) {
		var url = apiDates.apiUrl + 'json.php?origin=building';
		return $http.get(url);
	}
	this.getObjectTable = function ($scope, id, name, text) {
		var url = apiDates.apiUrl + 'json.php?origin=objekt&basic=true&id=' + id + '&name=' + name + '&text=' + text;
		return $http.get(url);
	}
})