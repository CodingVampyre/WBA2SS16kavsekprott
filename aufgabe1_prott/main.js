console.log("Timmeh!");

// requirements
var fs = require('fs');
var utf8 = require('utf8');
var chalk = require('chalk');

function sortHeight(a, b) {
    if (a.hoehe < b.hoehe) {
        return -1;
    } else if (a.hoehe > b.hoehe) {
        return 1;
    }
    return 0;
}

fs.readFile(__dirname + "/wolkenkratzer.json", function (err, data) {
    data = data.toString();
    data = JSON.parse(data);
    data = data.wolkenkratzer.sort(sortHeight);

    // write to file
    var jsondataJ = JSON.stringify(data);
    fs.writeFile(__dirname + "/wolkenkratzer_sortiert.json", jsondataJ, function (err) {
        console.log("wrote successfully");
    });

    for (var i = 0; i < data.wolkenkratzer.length; i++) {

        console.log(chalk.green("Name: " + data.wolkenkratzer[i].name) + chalk.red("\nStadt: " + data.wolkenkratzer[i].stadt) + chalk.blue("\nHoehe: " + data.wolkenkratzer[i].hoehe) + "\n--------------------------");

    }

    //console.log(data.wolkenkratzer[1]);
    // console.log(data);
});