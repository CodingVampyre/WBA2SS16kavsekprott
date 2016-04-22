var fs = require('fs')

fs.readFile(__dirname + "/restList.json", function (err, data){
	data = data.toString();
	data = JSON.parse(data);

	console.log(data[1].rname);
	console.log(data[1].rdesc);
});
