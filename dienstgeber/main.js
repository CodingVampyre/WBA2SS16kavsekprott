var express = require('express');
var fs = require('fs');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: 'root',
	database	: 'restaumania'
});

var app = express();

app.get('/', function (req, res){
	res.send('Works!');
});

app.get('/bloodymarry', function (req, res){
	res.send('BUUUH!');
});

app.get('/about', function (req, res){
	res.send("This little Server was made by Lilly Kavsek in honorable mention of Tim Prott!");
});

app.get('/restaurant/:name', function (req, res){
	connection.connect();

	connection.end();
});

app.get('/user/:nickname', function (req, res){
	connection.connect();
	connection.query('SELECT nickname, pwhash FROM restaurant_user WHERE nickname = "' + req.params.nickname + '";', function (err, row, fields){
		if (err) throw err;
		//res.send("Nickname: " + row[0].nickname + "/Passwort: " + row[0].pwhash);
		var accountData = JSON.stringify({
			"name":row[0].nickname,
			"pwhash":row[0].pwhash
		});
		res.json(accountData);
	});
	connection.end();
});

app.get('/RLIST/:name/:stadt?', function (req, res){

	fs.readFile(__dirname + "/restaurants.json", function (err, data) {
		data = data.toString();
		parsedData = JSON.parse(data);

		var message = "";

		for(var i=0; i<parsedData.restaurants.length; i++){
			if (parsedData.restaurants[i].name == req.params.name) {
				if (parsedData.restaurants[i].stadt == req.params.stadt || req.params.stadt == 'undefined'){
					message += (parsedData.restaurants[i].strasse + " ");
				}
			}
		}

		res.send(message+"\n");
		console.log("Success!");
	});
});

app.listen(3000, function() {
	console.log('Listening on Port 3000');
});
