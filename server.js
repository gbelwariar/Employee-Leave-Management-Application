/* 
 *	Schema of 'credentials' table - 
 * 		{
 *			username varchar(64),
 *			password varchar(64),
 *			role varchar(64)
 *		}
 */ 

/* 
 *	Schema of 'leave_requests' table - 
 * 		{
 *      key varchar(50),
 *			username varchar(64),
 *			submission_date varchar(10),
 *			leave_date varchar(10),
 *			leave_reason varchar(500),
 *			status varchar(20),
 *			comment varchar(500)
 *    }
 */ 
 
var express = require('express');
var cors = require('cors');
var app = express();
var pg = require("pg");
var http = require("http")
var bodyParser = require('body-parser');

app.use(cors())		

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var conString = "pg://postgres:rachit123@127.0.0.1:5433/testdb";


app.get('/get-all-leave-requests', function(request, response) {
		var client = new pg.Client(conString);
		client.connect();
		client.query("SELECT * FROM leave_requests")
			.then(function(res) {
				response.send(res.rows);
			})
			.catch(function(error) {});	
});		


app.post('/login', function(request, response) {
		var client = new pg.Client(conString);
		client.connect();
		client.query("SELECT * FROM credentials WHERE username=$1", [request.body.username])
			.then(function(res) {
				if (res.rows.length === 0 || res.rows[0].password !== request.body.password) {
					responseMessage = 'Invalid credentials or the user - ' + request.body.username + ' does not exist!';
					response.send({
						allowEntry: false
					});
				} else {
					responseMessage = 'Login successful for user - ' + request.body.username;
					response.send({
						allowEntry: true,
						role: res.rows[0].role
					});
				}
				console.log(responseMessage);
			})
			.catch(function(error) {});	
});		


app.post('/signup', function(request, response) {
		var client = new pg.Client(conString);
		client.connect();
		client.query(
				"CREATE TABLE IF NOT EXISTS credentials(username varchar(64), password varchar(64), role varchar(64))");			
		client.query("SELECT * FROM credentials WHERE username=$1", [request.body.username])
			.then(function(res) {
				if (res.rows.length === 1) {
					responseMessage = 'The user \'' + request.body.username + '\' is already signed up!';
					response.send(false);
				} else {
					// Create table and insert the record corresponding to the new user.
					client.query(
							"INSERT INTO credentials(username, password, role) values($1, $2, $3)",
							[request.body.username, request.body.password, request.body.role]);
					responseMessage = 'Sign up successful for user - ' + request.body.username;
					response.send(true);
				}
				console.log(responseMessage);
			})
			.catch(function(error) {});
});		


app.post('/get-leave-requests', function(request, response) {
		var client = new pg.Client(conString);
		client.connect();
		client.query("SELECT * FROM leave_requests WHERE username=$1", [request.body.username])
			.then(function(res) {
				response.send(res.rows);
			})
			.catch(function(error) {});	
});		


app.post('/insert-leave-request', function(request, response) {
		var client = new pg.Client(conString);
		client.connect();
		client.query(
				"CREATE TABLE IF NOT EXISTS leave_requests(" + 
						"key varchar(50)," +
						"username varchar(64)," + 
						"submission_date varchar(10)," + 
						"leave_date varchar(10)," + 
						"leave_reason varchar(500)," +
						"status varchar(20)," +
						"comment varchar(500))");			
		// Create table and insert the leave request.
		client.query(
				"INSERT INTO leave_requests(key, username, submission_date, leave_date, leave_reason, status, comment) values($1, $2, $3, $4, $5, $6, $7)",
				[
					request.body.key,
					request.body.username,
					request.body.submissionDate,
					request.body.leaveDate,
					request.body.leaveReason,
					request.body.status,
					request.body.comment
				]);
		console.log('Leave request - ' + request.body.key + ' submitted');
		response.end();
});		


app.post('/update-leave-request', function(request, response) {
		var client = new pg.Client(conString);
		client.connect();
		client.query(
				"UPDATE leave_requests SET status=$1, comment=$2 WHERE key=$3",
				[request.body.status, request.body.comment, request.body.key]);			
		console.log('Leave request - ' + request.body.key + ' updated');
		response.end();
});		


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
