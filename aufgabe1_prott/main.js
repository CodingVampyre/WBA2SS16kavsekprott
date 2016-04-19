console.log("Timmeh!");

// requirements
var fs = require('fs');
var utf8 = require('utf8');

fs.readFile(__dirname + "/wolkenkratzer.json", function (err, data) {
    data = data.toString();
    data = JSON.parse(data);

    for (var i = 0; i < data.wolkenkratzer.length; i++) {

        console.log("Name: " + data.wolkenkratzer[i].name + "\nStadt: " + data.wolkenkratzer[i].stadt + "\nHoehe: " + data.wolkenkratzer[i].hoehe + "\n--------------------------");

    }

    //console.log(data.wolkenkratzer[1]);
    // console.log(data);
});