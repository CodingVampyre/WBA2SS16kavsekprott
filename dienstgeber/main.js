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

var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: 'root',
	database	: 'restaumania'
});

app.get('/bloodymarry', function (req, res){
	res.send('BUUUH!\n');
});

app.get('/about', function (req, res){
	res.send("This little Server was made by Lilly Kavsek in honorable mention of Prof. Dr. Ph.D. Sir. Tim Prott!");
});

app.get('/restaurant/:name', function (req, res){
	connection.connect();

	connection.end();
});

app.get('/users/:nickname', function (req, res){
	connection.connect();
	connection.query('SELECT nickname, pwhash FROM restaurant_user WHERE nickname = "' + req.params.nickname + '";', function (err, row, fields){
		//if (err) throw err;
		var accountData = JSON.stringify({
			"uid":row[0].id,
			"name":row[0].nickname,
			"pwhash":row[0].pwhash
		});
		res.json(accountData);
	});
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

app.listen(3000, function() {
	console.log('Listening on Port 3000');
});
