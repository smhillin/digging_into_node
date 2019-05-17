const http = require('http')

//use this to test your post routes.  make sure the port and host is correct
const data = JSON.stringify({
    name: 'Shaun',
    title: 'Mr.'
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/students',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
})

req.on('error', (error) => {
    console.error(error)
})

req.write(data)
req.end()