function MaxDateDirective(dateService) {
	return {
		link: function(scope, elem, attr) {
			elem[0].setAttribute('min', dateService.convertDateToYYYYMMDD(new Date()));
		}
	};
}


angular
				.module('employeeLeaveManagementSystem')
				.directive('maxDate', ['dateService', MaxDateDirective]);