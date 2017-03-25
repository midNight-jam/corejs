function MyCtrl($scope){
	$scope.value = 1;
	$scope.visible = true;
	$scope.toggle = function(){
		$scope.visible = !$scope.visible;
	};
	
	$scope.incrementValue = function(increment){
		$scope.value += increment;
	};
}