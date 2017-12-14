var headComponent = {
	bindings: {
		username: '@'
	},
	controller: 'HeadCtrl',
	controllerAs: 'headCtrl',
	templateUrl: 'head/head.html'
};


angular
				.module('employeeLeaveManagementSystem')
				.component('headOfOrganization', headComponent);
