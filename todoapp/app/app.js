(function() {
	var app = angular.module('TodoApp', ['ngRoute', 'ui.sortable', 'googlechart']);

	var requireLogin = function($location, $q, Api) {
		var deferred = $q.defer();
		if (!Api.isLoggedIn()) {
			deferred.reject();
			$location.path('/');
		} else {
			deferred.resolve();
		}
		return deferred.promise;
	};

	app.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/todoapp/app/partials/login.html'
			})
			.when('/todos', {
				templateUrl: '/todoapp/app/partials/todos.html',
				resolve: {requireLogin: requireLogin}
			})
	});
})();