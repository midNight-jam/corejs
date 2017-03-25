var app = angular.module("MyApp",[]);

// factory method creating a singleton service
app.factory("UserService", function(){
	var users = ["peter","daniel","Nina"];
	return {
		all : function(){
			return users;
		},
		first : function(){
			return users[0];
		}
	};
});

// controller consuming the service via dependency injection
app.controller("MyCtrl",
	[
		"$scope", 	// dependency 1
		"UserService",	// dependency 2
		function($scope, UserService){
			$scope.users = UserService.all();	
		}
]);

// controller consuming the service via dependency injection
app.controller("AnotherCtrl", function($scope, UserService){
	$scope.firstUser = UserService.first();
});