var express = require('express');
var fs = require('fs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function sha1(data){
	var generator = crypto.createHash('sha1');
	generator.update(data);
	return generator.digest('hex');
}

var clientPool = mysql.createPool({
	host		: 'localhost',
	user		: 'root',
	password	: '',
	database	: 'restaumania'
});



app.get('/bloodymarry', function (req, res){
	res.send('BUUUH!\n');
});

app.get('/about', function (req, res){
	res.send("This is Restaumania!");
});

app.get('/restaurant/:name', function (req, res) {
	clientPool.getConnection(function(err, connection) {
		connection.query(`SELECT * from restaurant WHERE restaurant_name='${req.params.name}';`, function(err, rows, fields){
		res.json(rows);
		res.end();
		connection.release();
		});
	});
});

app.get('/restaurant/', function (req, res) {
	clientPool.getConnection(function(err, connection) {
		connection.query('SELECT * from restaurant;', function(err, rows, fields){
		res.json(rows);
		res.end();
		connection.release();
		});
	});
});

app.post('/restaurant', function (req, res) {
	clientPool.getConnection(function(err, connection) {
		connection.query(`insert into restaurant (restaurant_name, restaurant_description, user_id, creation_timestamp) values ('${req.body.restaurant_name}', '${req.body.restaurant_description}', '${req.body.user_id}', '${req.body.creation_timestamp}');`, function(err, rows, fields){
			res.end();
			connection.release();
		});
	});
});
/*
app.get('/restaurant/:name', function (req, res){
	connection.connect();

	connection.end();
});

app.get('/users/:nickname', function (req, res){
	connection.connect();
	connection.query('SELECT nickname, pwhash FROM restaurant_user WHERE nickname = "' + req.params.nickname + '";', function (err, row, fields){
		if (err) throw err;
		var accountData = JSON.stringify({
			"uid":row[0].id,
			"name":row[0].nickname,
			"pwhash":row[0].pwhash
		});
		res.json(accountData);
	});
	connection.end();
});

app.get('/restaurant/:name', function (req, res){
	connection.connect();
	//mit query Zugriff auf Datenbank
	connection.query('platzhalter für dunkle SQL Magie' + req.params.name + '";', function (err, row, fields){
		var restaurantData = JSON.stringify({
			"name":row[0].name,
			"stadt":row[0].stadt,
			"strasse":row[0].strasse
		});
		res.json(restaurantData);
	});
	connection.end();
});

app.post('/restaurant/:name', function (req, res) {
	connection.connect();
	var name = req.body.name;
	var stadt = req.body.stadt;
	var strasse = req.body.strasse;
	console.log("neues Restaurant hinzugefügt");
	connection.end();

});
app.post('/users/:nickname', function (req, res) {
	connection.connect();
	var username = req.body.name;
	var pw = req.body.pw;
	var pwhash =  "somehash" //sha1(pw);
	console.log("Hash: " + pwhash);
	connection.end();
});
*/
app.listen(3000, function() {
	console.log('Listening on Port 3000');
});
