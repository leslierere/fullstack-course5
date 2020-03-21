(function (){

'use strict'; // used to prvent errors such as x='hello'; if this is here, x would be a global variable

var x = 'hello';

angular.module('myFirstApp', [])

.controller('MyFirstController', function(){

});


})();