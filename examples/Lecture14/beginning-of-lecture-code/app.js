(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
	$scope.onceCounter = 0;
	$scope.counter = 0;

  $scope.showNumberOfWatchers = function () {
  	console.log("# of watchers",$scope.$$watchersCount);
  };

  $scope.countOnce = function() {
  	$scope.onceCounter = 1;
  }

  $scope.upCounter = function() {
  	$scope.counter++;
  }

  $scope.$watch(function() {
    console.log("Digest Loop Fired!")
  })


  // $scope.$watch('onceCounter', function(newValue, oldValue) {
  // 	console.log("oldValue: ", oldValue);
  // 	console.log("newValue: ", newValue);
  // });

  // $scope.$watch('counter', function(newValue, oldValue) {
  // 	console.log("oldValue: ", oldValue);
  // 	console.log("newValue: ", newValue);
  // });

}

})();
