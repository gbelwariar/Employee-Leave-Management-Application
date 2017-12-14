var employeeComponent = {
	bindings: {
		username: '@'
	},
	controller: 'EmployeeCtrl',
	controllerAs: 'employeeCtrl',
	templateUrl: 'employee/employee.html'
};


angular
				.module('employeeLeaveManagementSystem')
				.component('employee', employeeComponent);