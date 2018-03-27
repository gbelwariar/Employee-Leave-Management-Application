function HeadCtrl($http, $stateParams) {
	this.allLeaveRequests;
	
	this.$onInit = function() {
		this.httpService_ = $http;	
		this.statuses = ['Approved', 'Rejected', 'Pending'];
		// Maintain the order of the next two statements to get the correct username while retrieving
		// all the leave requests from the database.		
		this.username = $stateParams.username;
		this.getAndSetAllLeaveRequests_();
	};
}


HeadCtrl.prototype.updateLeaveRequest = function(leaveRequest) {
	this.httpService_
		.post(getFullUrl_('update-leave-request'),
		{
			key: leaveRequest.key,
			status: leaveRequest.status,
			comment: leaveRequest.comment
		},
		{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
		.then((function() {
			this.getAndSetAllLeaveRequests_();;
		}).bind(this), function(error) {})
		.catch(function() {});
}


HeadCtrl.prototype.getAndSetAllLeaveRequests_ = function() {
	this.httpService_
			.get(getFullUrl_('get-all-leave-requests'))
			.then((function(response) {
				this.allLeaveRequests = response.data;
			}).bind(this), function(error) {});
}


function getFullUrl_(relativeUrl) {
	return 'http://localhost:8080/' + relativeUrl;
}


angular
				.module('employeeLeaveManagementSystem')
				.controller('HeadCtrl', ['$http', '$stateParams', HeadCtrl]);
