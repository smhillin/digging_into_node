const rdl = require('readline');
const fs = require('fs');

var lineReader = rdl.createInterface({
    input: fs.createReadStream('baby_names.txt')
});

lineReader.on('line', function (line) {
    console.log('Name:', line);
});