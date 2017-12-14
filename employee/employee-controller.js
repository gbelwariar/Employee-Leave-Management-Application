function EmployeeCtrl($http, dateService, keyService) {
	this.username;
	this.dateFromClient;
	this.leaveRequests;
	
	this.$onInit = function() {
		this.httpService_ = $http;
		this.dateService_ = dateService;
		this.keyService_ = keyService;
		/*
			{
					key: '...',
					username: '...',
					submissionDate: '...',
					leaveDate: '...',
					leaveReason: '...',
					status: '...'						// Three status available - 'Approved', 'Rejected', 'Pending'.
			}
		*/
		this.leaveRequestDetails = {};	
		this.getAndSetLeaveRequests_();
	};
}


EmployeeCtrl.prototype.requestLeave = function() {
	this.leaveRequestDetails.key = this.keyService_.getKey();
	this.leaveRequestDetails.username = this.username;
	this.leaveRequestDetails.leaveDate =
			this.dateService_.convertDateToDDMMYYYY(this.dateFromClient);
	this.leaveRequestDetails.comment = '';
	this.leaveRequestDetails.submissionDate =
			this.dateService_.convertDateToDDMMYYYY(new Date());
	this.leaveRequestDetails.status = 'Pending';
	this.httpService_.post(
		getFullUrl_('insert-leave-request'),
		this.leaveRequestDetails,
		{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
		.then((function() {
			this.getAndSetLeaveRequests_();
		}).bind(this), function(error){})
		.catch(function(){});	
}


EmployeeCtrl.prototype.getAndSetLeaveRequests_ = function() {
	this.httpService_.post(
		getFullUrl_('get-leave-requests'),
		{username: this.username},
		{headers: {'Content-Type': 'application/json', 'Authorization': 'Basic '}})
		.then((function(response) {
			this.leaveRequests = response.data;
		}).bind(this), function(error) {})
		.catch(function() {});	
}


function getFullUrl_(relativeUrl) {
	return 'http://localhost:8080/' + relativeUrl;
}


angular
				.module('employeeLeaveManagementSystem')
				.controller('EmployeeCtrl', ['$http', 'dateService', 'keyService', EmployeeCtrl]);