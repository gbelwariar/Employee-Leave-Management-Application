function HomeCtrl($http, $state) {
		/*
				{
						username: '...',
						role: '...'				// Two roles available - 'Employee', 'Head'.
				}
		*/
		this.$onInit = (function() {
			this.currentUserDetails = {};		// The details about the user currently logged in.
			this.roles = ['Employee', 'Head'];			
			this.httpService_ = $http;
			this.stateService_ = $state;
			/*
					{
							username: '...',
							password: '...'
					}
			*/
			this.loginDetails = {};
			
			/*
					{
							username: '...',
							password: '...'
							role: '...'
					}
			*/
			this.signUpDetails = {};
		}).bind(this);
}


HomeCtrl.prototype.login = function() {
	this.httpService_.post(
		getFullUrl_('login'),
		this.loginDetails,
		{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
		.then((function(response) {
			if (response.data.allowEntry === false) {
				alert('Invalid credentials or the user does not exist!');
			} else {
				if (response.data.role === 'Employee') {
					this.stateService_.go('employee', {username: this.loginDetails.username});
				} else if (response.data.role === 'Head') {
					this.stateService_.go('head', {username: this.loginDetails.username});
				}
			}
		}).bind(this), function(error){})
		.catch(function(){});				
};


HomeCtrl.prototype.signUp = function() {
	this.httpService_.post(
		getFullUrl_('signup'),
		this.signUpDetails,
		{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
		.then((function(response) {	
			if (response.data === false) {
				alert('The user \'' + this.signUpDetails.username +
						 '\' is already signed up!. Please login above.');
			} else {
				if (this.signUpDetails.role === 'Employee') {
					this.stateService_.go('employee', {username: this.signUpDetails.username});
				} else if (this.signUpDetails.role === 'Head') {
					this.stateService_.go('head', {username: this.signUpDetails.username});
				}						
			}
		}).bind(this), function(error){})
		.catch(function(){});							
};


function getFullUrl_(relativeUrl) {
	return 'http://localhost:8080/' + relativeUrl;
}


angular
		.module('employeeLeaveManagementSystem')
		.controller('HomeCtrl', ['$http', '$state', HomeCtrl]);