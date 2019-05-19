const fs = require('fs')
const path = require('path')
const fileName = path.join(__dirname, process.argv[2] || 'webapp.log')
const os = require('os')

const start =os.freemem()
const arr = []
//create a file
for(let i=0; i<= 1e6; i++) {
  arr.push('I will not use single threaded Blocking I/O. ')
}


fs.writeFileSync(`${fileName}2`, arr.join('\n'))
const end = os.freemem()
console.log(start, end)