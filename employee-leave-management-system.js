angular
		.module('employeeLeaveManagementSystem', ['ui.router'])
		.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home/home.html',
					controller: 'HomeCtrl as homeCtrl'
				})
				.state('head', {
					url: '/head',
					templateUrl: 'head/head.html',
					controller: 'HeadCtrl as headCtrl',
					params: {
						username: 'head'
					}
				})
				.state('employee', {
					url: '/employee',
					templateUrl: 'employee/employee.html',
					controller: 'EmployeeCtrl as employeeCtrl',
					params: {
						username: 'employee'
					}
				});
		}]);
