function KeyService() {}


/**
 * Returns "mostly a unique" key to be used as a primary key in databases.
 * Code taken from - https://stackoverflow.com/a/2117523/5928129
 * 
 * @return {string} 
 */
KeyService.prototype.getKey = function() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}


angular
				.module('employeeLeaveManagementSystem')
				.service('keyService', KeyService);