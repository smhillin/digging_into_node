const fs = require('fs')
const path = require('path')
const fileName = path.join(__dirname, process.argv[2] || 'webapp.log')
const file = fs.createWriteStream(fileName)
const os = require('os')

const start =os.freemem()
for(let i=0; i<= 1e6; i++) {
  file.write('I will not use single threaded Blocking I/O. \n')
}

file.end()
const end = os.freemem()
console.log(start, end)
