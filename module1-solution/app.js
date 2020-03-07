(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
	$scope.dishes = "";
	$scope.message = "Please enter data first";

	$scope.dishesSplit = function () {
		
		if ($scope.dishes.length>0) {
			var dishArray = $scope.dishes.split(",");
			console.log(dishArray);

			if (dishArray.length>3){
				$scope.message = "Too much!";
			}else if (dishArray.length>0){
				$scope.message = "Enjoy!";
			}
		}else{
			$scope.message = "Please enter data first";
		}
		

	}

}


})();