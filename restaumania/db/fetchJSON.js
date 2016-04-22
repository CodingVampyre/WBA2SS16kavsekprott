var fs = require('fs')

fs.readFile(__dirname + "/restList.json", function (err, data){
	data = data.toString();
	data = JSON.parse(data);

	for(var i=0; i<data.length; i++){
		console.log(data[i].rname + ": " + data[i].rdesc);
	}
});
