var fs = require('fs');
var chalk = require('chalk');
var json2html = require('node-json2html');

fs.readFile(__dirname + "/restCard.json", function (err, data){
	data = data.toString();
	data = JSON.parse(data);

	/*for(var i=0; i<data.length; i++){
		console.log(chalk.red(data[i].rname) 
		+ " (" 
		+ chalk.yellow(data[i].resid) 
		+ "): " 
		+ data[i].catname 
		+ " - " 
		+ data[i].scatname 
		+ ": " 
		+ data[i].price 
		+ " - " 
		+ data[i].entry 
		+ " (" 
		+ data[i].edetails 
		+ ")");
	}*/

	var transform = {'tag':'div','html':'<h2>${entry}</h2><p>${catname}/${scatname}</p><p class="carddetails">${edetails}</p><p class="cardprice">${price}</p>'};
	var html = json2html.transform(data,transform);

	console.log(html);
	fs.writeFile('card.html', html, function (err) {
		if (err) return console.log(err);
		console.log("HTML done");
	});
});
