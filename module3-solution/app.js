(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);


FoundItems.$inject = [];
function FoundItems(){
	var ddo = {
		templateUrl:'foundItems.html',
		scope:{
			items:'<',
			onRemove:'&'
		},
		controller: NarrowItDownController,
		controllerAs: 'narrow',
		bindToController: true
	}
	return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService','$scope'];
function NarrowItDownController(MenuSearchService, $scope) {
	var narrow = this;
// how to get the searchTerm
	narrow.searchTerm = "";
	// console.log($scope.searchTerm);
	narrow.getItems = function () {
		var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
		promise.then(function(items){
			narrow.found = items;
			console.log("In controller:", narrow.found);
			// console.log("Search Term:", narrow.searchTerm);
		});
	}
	


	narrow.removeItem = function (itemIndex) {
		// console.log("removeItem:", narrow.found);
	    narrow.found.splice(itemIndex,1);
	    // return narrow.found;
  	};
  	// console.log("Info inside:", narrow.found);
	
}



MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	
	service.getMatchedMenuItems = function (searchTerm) {
		return $http(
			{
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/menu_items.json",
			}).then(function (response) {
		    // process result and only keep items that match
		    var foundItems = [];
		    // console.log("searchTerm in service:",searchTerm);
		    for (var i = 0; i < response.data.menu_items.length; i++) {
		    	var name = response.data.menu_items[i].name;
		    	if (!(response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) === -1)) {
		    		foundItems.push(name);
		    	}
		    }
		    // console.log(foundItems);
		    return foundItems;
			});

	};
	
}
})();
