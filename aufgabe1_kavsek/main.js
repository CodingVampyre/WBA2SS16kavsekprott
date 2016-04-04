console.log("Aufgabe 1 & 2 - Lilly Kavsek\n");

var line = "-------------------";
var counter = 0;

// activate fs
var fs = require('fs');

// activate chalk
var chalk = require('chalk');

// read
fs.readFile(__dirname + "/wolkenkratzer.json", function (err, data) {
    data = data.toString();
    jsondata = JSON.parse(data);
    for (var counter = 0; counter < jsondata.wolkenkratzer.length; counter++) {

        // print one tower
        console.log("Name:  " + chalk.blue(jsondata.wolkenkratzer[counter].name) + "\nStadt: " +
            chalk.green(jsondata.wolkenkratzer[counter].stadt) + "\nHöhe:  " +
            chalk.red(jsondata.wolkenkratzer[counter].hoehe) + "m");
        console.log(line);

    }
});