// var fs = require('fs')
//
// var contents = fs.readFileSync('accounts.txt','utf8')
// console.log(contents)
// console.log('Hello Ruby\n')
//
// // var contents = fs.readFileSync('ips.txt','utf8')
// // console.log(contents)
// console.log('Hello Node!')
// //accounts.txt->Hello Ruby->ips.txt->Hello Node!

var fs = require('fs')
var contents
fs.readFile('accounts.txt','utf8', function(error, contents){
    console.log(contents);
})

console.log('Hello Ruby\n')

// fs.readFile('ips.txt','utf8', function(error, contents){
//     console.log(contents)
// })
console.log('Hello Node!')
//Hello Ruby->Hello Node->... accounts.txt->ips.txt or ips.txt->accounts.txt

