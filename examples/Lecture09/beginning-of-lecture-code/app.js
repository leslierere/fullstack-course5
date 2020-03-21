(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope,
					   $filter,
					   $injector) {
  $scope.name = "Yaakov";

  // pretty much anything in Angular with a dollar sign in front of it, not only does it belong to Angular, but it's also referred to as a service. So from now on, when I refer to $scope, I'm really going to just refer to the scope service.
  $scope.upper = function () {
  	var upCase = $filter('uppercase');
  	$scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

function AnnotateMe(name, job, blah) {
	return "blah!";
}

console.log(AnnotateMe());

})();
