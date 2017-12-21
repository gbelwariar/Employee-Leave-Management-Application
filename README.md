<a href="https://github.com/gbelwariar"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"></a>
# Employee Leave Management System

An employee leave management web application in which the employees of an organization can submit leave requests to the managers/head of the organization for their approval/rejection. 
 
## How to use/install the application 

Download the repository - [Employee-Leave-Management-Application](https://github.com/gbelwariar/Employee-Leave-Management-Application) and open the home page - **employee-leave-management-system.html** (*Employee-Leave-Management-Application/employee-leave-management-system.html*) in any browser(preferably Mozilla Firefox). 

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

Name of the Component                                                                                                    | Description
-------------------------------------------------------------------------------------------------------------------------| -------------
[**Home Screen**](https://github.com/gbelwariar/Employee-Leave-Management-Application/blob/master/employee-leave-management-system-controller.js)                                                                                                           | This is the component to which all the other components are loosely coupled with. It is responsible for the following tasks -<br/> 1) Fetching the difficulty level and name from the user playing the game.<br/> 2) Initialization of the game.
[**Gameplay**](https://github.com/gbelwariar/TypeRacer/tree/master/public_html/gameplay)                                 | Responsible for the following tasks -<br/> 1) Resetting the game variables everytime the game is reset.<br/> 2) Installation of the timer responsible for the countdown till the game starts.<br/> 3) Calculation of the live speed of the human-entered input.<br/>                                                                                       
[**Live Results**](https://github.com/gbelwariar/TypeRacer/tree/master/public_html/live-results)                         | Responsible for the following tasks -<br/> 1) Displaying the live status which would reflect whether the text entered by the player matches with a prefix of the challenge string. If it matches then a tick (✔), otherwise a cross (✘) is displayed.<br/> 2) Declaring the winner of the game or if both the useer and the computer finishes the game at the same time then the game is said to be drawn.        
[**Dictionary Service**](https://github.com/gbelwariar/TypeRacer/blob/master/public_html/services/dictionary-service.js) | Responsible for providing the challenge string. By default the number of words in the challenge string is 20 and all the words are selected randomly out of about 600 words present in the dictionary in order to make the game unbiased. All the words are valid English words.
