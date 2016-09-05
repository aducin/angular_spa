angular.module('ZappApp.CockpitModel', [])

.service(
	"cockpitModel",
	function( $http, apiDates ) {
	this.getCockpitTable = function ($scope, origin) {
			var url = apiDates.apiUrl + 'json.php?origin=' + origin;
			return $http.get(url);
		}
	}
)