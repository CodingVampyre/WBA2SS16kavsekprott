console.log("Aufgabe 1 & 2 - Lilly Kavsek\n");

// dependencies
var fs = require('fs');
var chalk = require('chalk');

// Cpompare-Function
function sortHeight(a, b) {
    if (a.hoehe < b.hoehe) {
        return -1;
    } else if (a.hoehe > b.hoehe) {
        return 1;
    }
    return 0;
}

// read and print
fs.readFile(__dirname + "/wolkenkratzer.json", function (err, data) {

    data = data.toString();
    jsondata = JSON.parse(data);
    jsondata.wolkenkratzer.sort(sortHeight);

    // write to file
    var jsondataJ = JSON.stringify(jsondata);
    console.log(jsondataJ);
    fs.writeFile(__dirname + "/wolkenkratzer_sortiert.json", jsondataJ, function (err) {
        console.log("Ups! Das JSON konnte nicht geschrieben werden.");
    });

    // print
    for (var counter = 0; counter < jsondata.wolkenkratzer.length; counter++) {
        console.log("Name:  " + chalk.blue(jsondata.wolkenkratzer[counter].name) + "\nStadt: " + chalk.green(jsondata.wolkenkratzer[counter].stadt) + "\nHöhe:  " + chalk.red(jsondata.wolkenkratzer[counter].hoehe) + "m\n-------------------");
    }
});