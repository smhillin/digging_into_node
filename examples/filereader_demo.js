const fs = require("fs")

//SYNC CODE 1
// const files = fs.readdirSync('/')
// console.log(files);

//SYNC CODE 2
// const files = fs.readdirSync('/no-directory')
// console.log(files);



//ASYNC WRITEN SYNC turn files in current directory
// const files = fs.readdir ('/')
// console.log(files);

//ASYNC code written ASYNC
// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


//ASYNC code written ASYNC with NO directory
// fs.readdir('/no-directory', function(err, files){
//     if (err) console.log('File does not exist', err);
//     else console.log('Result', files);
// });
// console.log("---->Do some other stuff.......")