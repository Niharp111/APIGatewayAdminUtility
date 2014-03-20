var adminAPIApp = angular.module('home', ['ui.bootstrap','ngRoute']);

	// configure our routes
	adminAPIApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'HomeController'
			})

			// route for the about page
			.when('/getClient', {
				templateUrl : 'views/getClient.html',
				controller  : 'getClientController'
			})
			.when('/createClient', {
				templateUrl : 'views/createClient.html',
				controller  : 'createClientController'
			})
			.when('/getProvider', {
				templateUrl : 'views/getProvider.html',
				controller  : 'getProviderController'
			})
			.when('/createProvider', {
				templateUrl : 'views/createProvider.html',
				controller  : 'createProviderController'
			})
			.when('/getPriorities', {
				templateUrl : 'views/getPriorities.html',
				controller  : 'getPrioritiesController'
			})
			.when('/createPriorities', {
				templateUrl : 'views/createPriorities.html',
				controller  : 'createPrioritiesController'
			})

			.otherwise({
			templateUrl :'pages/home.html'
		});
	});

	adminAPIApp.controller('HomeController', function($scope) {
		$scope.oneAtATime = true;

		$scope.clients = [ {
			name : "Get Client",
			hrefValue:"#getClient"
		}, {
			name : "Create Client",
			hrefValue:"#createClient"
		} ];
		
		$scope.providers= [ {
			name : "Get Providers",
			hrefValue:"#getProvider"
		}, {
			name : "Create Providers",
			hrefValue:"#createProvider"
		} ];
		
		
		$scope.priorities= [ {
			name : "Get Prioritries",
			hrefValue:"#getPriorities"
		}, {
			name : "Create Prioritries",
			hrefValue:"#createPriorities"
		} ];
	});
	adminAPIApp.controller('getClientController', function($scope) {
		$scope.message = 'I am a create client Page.';
	});
	
	adminAPIApp.controller('createClientController', function($scope) {
		$scope.message = 'I am a create client Page.';
	});

	adminAPIApp.controller('createProviderController', function($scope) {
		$scope.message = 'I am a create provider page';
	});
