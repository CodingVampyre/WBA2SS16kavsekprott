console.log("Aufgabe 1 - Lilly Kavsek");

var line = "-------------------";
var counter = 0;

// activate fs
var fs = require('fs');
fs.readFile(__dirname + "/wolkenkratzer.json", function (err, data) {
    data = data.toString();
    jsondata = JSON.parse(data);
    for (var counter = 0; counter < jsondata.wolkenkratzer.length; counter++) {
        console.log("Name:  " + jsondata.wolkenkratzer[counter].name + "\nStadt: " + jsondata.wolkenkratzer[counter].stadt + "\nHöhe:  " + jsondata.wolkenkratzer[counter].hoehe + "m");
        console.log(line);
    }
});