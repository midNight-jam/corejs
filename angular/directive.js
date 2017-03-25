<html>
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.js">
		</script>
		<script src="app.js">
		</script>
	</head>
	<body ng-app>
		<p> This is your first angular expression : {{ 1 + 2 }}</p>
		Enter ur name : <input type = "text" ng-model="name"> </input>
		<p> Hello {{name | uppercase}}</p>
		<div ng-controller = "MyCtrl">
			<button ng-click = "toggle()"> Toggle</button>
			<p ng-show="visible"> Hello World! </p>
		</div>
	<body>
</html>