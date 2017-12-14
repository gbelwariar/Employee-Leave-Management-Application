function EmployeeLeaveManagementSystemCtrl($scope, $http) {
		/*
				{
						username: '...',
						role: '...'				// Two roles available - 'Employee', 'Head'.
				}
		*/
		$scope.currentUserDetails = {};		// The details about the user currently logged in.
		this.$onInit = function() {
			$scope.roles = ['Employee', 'Head'];
			/* TODO: Refactor the code to use controllerAs instead of
							 $scope.
				'loginDetails' and 'signUpDetails' are objects since the 
				binding is inside ng-repeat which creates new scope in 
				which primitives don't work well. This problem would not 
				have arised, if we would have used - controllerAs.
				But unfortunately, controllerAs syntax is not working well. 
			*/
			
			/*
					{
							username: '...',
							password: '...'
					}
			*/
			$scope.loginDetails = {};
			
			/*
					{
							username: '...',
							password: '...'
							role: '...'
					}
			*/
			$scope.signUpDetails = {};
			$scope.allowEntry = false;
		};

		$scope.login = function() {
			$http.post(
				getFullUrl_('login'),
				$scope.loginDetails,
				{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
				.then(function(response) {
					$scope.allowEntry = response.data.allowEntry;
					if (response.data.allowEntry === false) {
						alert('Invalid credentials or the user does not exist!');
					} else {
						$scope.currentUserDetails.username = $scope.loginDetails.username;
						$scope.currentUserDetails.role = response.data.role;
					}
				}, function(error){})
				.catch(function(){});			
		};
		
		$scope.signUp = function() {
			$http.post(
				getFullUrl_('signup'),
				$scope.signUpDetails,
				{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
				.then(function(response) {	
					$scope.allowEntry = response.data;
					if (response.data === false) {
						alert('The user \'' + $scope.signUpDetails.username + '\' is already signed up!. Please login above.');
					} else {
						$scope.currentUserDetails.username = $scope.signUpDetails.username;
						$scope.currentUserDetails.role = $scope.signUpDetails.role;						
					}
				}, function(error){})
				.catch(function(){});						
		};
		
		$scope.logOut = function() {
			$scope.currentUser = '';
			$scope.allowEntry = false;
			$scope.loginDetails = {};
			$scope.signUpDetails = {};
		};
}


function getFullUrl_(relativeUrl) {
	return 'http://localhost:8080/' + relativeUrl;
}


angular
		.module('employeeLeaveManagementSystem')
		.controller('EmployeeLeaveManagementSystemCtrl', ['$scope', '$http', EmployeeLeaveManagementSystemCtrl]);