const fs = require('fs');
let rawdata = fs.readFileSync('./pokemon.json');
let objectsnstuff = JSON.parse(rawdata);

for (var i = 0; i < 151; ++i) {
    if ("Pikachu" == objectsnstuff[i].name) {
        console.log(objectsnstuff[i].type)
    }
}

