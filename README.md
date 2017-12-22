<a href="https://github.com/gbelwariar"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"></a>
# Employee Leave Management System

An employee leave management web application in which the employees of an organization can submit leave requests to the managers/head of the organization for their approval/rejection. 
 
## How to use/install the application 

Download the repository - [Employee-Leave-Management-Application](https://github.com/gbelwariar/Employee-Leave-Management-Application) and open the home page - **employee-leave-management-system.html** (*Employee-Leave-Management-Application/employee-leave-management-system.html*) in any browser(preferably Mozilla Firefox). In order to interact with the database, the server should be brought up to run using the command - "*node server.js*".

## Screenshots (as in Firefox Browser)

### → Home Page
<kbd>![Home Page](/screenshots/Home_Page.GIF?raw=true "Home Page")<kbd>
 
### → Page displayed when an employee of the organization logs in. 
<kbd>![Employee Screen](/screenshots/Employee.GIF?raw=true "Employee Screen")<kbd>
 
### → Page displayed when a head of the organization logs in. 
<kbd>![Head Screen](/screenshots/Head.GIF?raw=true "Head Screen")<kbd>

## Technology Stack - 

The application is built on **PEAN** stack comprising of [**P**ostgreSQL](http://www.postgresql.org/), [**E**xpress](http://expressjs.com/), [**A**ngularJS](http://angularjs.org/) and [**N**ode.js](http://www.nodejs.org/).  

## Components of the Projects

Name of the Component                                                                                                     | Description
--------------------------------------------------------------------------------------------------------------------------| ------------
[**Home Screen**](https://github.com/gbelwariar/Employee-Leave-Management-Application/blob/master/employee-leave-management-system-controller.js)                                                                                                            | This is the component to which all the other components are loosely coupled with. It is responsible for the following tasks -<br/> 1) Defining the constants of the application like - number of roles available etc.<br/> 2) Providing users the feature to sign-up an account in the application.<br/> 3) Providing users the feature to log-into their account in the application.
[**Employee**](https://github.com/gbelwariar/Employee-Leave-Management-Application/tree/master/employee)                  | Responsible to provide the following features to the employees of the organization -<br/> 1) Requesting for leave(s) from the head of the organization.<br/> 2) Showing the current status of all the requests submitted so far by the employee(includes non-reviewed requests as well).<br/>
[**Head**](https://github.com/gbelwariar/Employee-Leave-Management-Application/tree/master/head)                          | Responsible to provide the following features to the head of the organization -<br/> 1) Showing the details of all the requests submitted so far by all the employees of the organization.<br/> 2) Providing ability to review the requests by approving/rejecting/putting-them-on-hold and specifying the reason for the same(optional).        
[**Date Service**](https://github.com/gbelwariar/Employee-Leave-Management-Application/blob/master/services/date-service) | Responsible for providing the APIs for parsing Date objects to YYYY-MM-DD and DD-MM-YYYY format.
[**Key Service**](https://github.com/gbelwariar/Employee-Leave-Management-Application/blob/master/services/key-service.js)| Responsible for providing unique key to be used as a primary key in the database.
