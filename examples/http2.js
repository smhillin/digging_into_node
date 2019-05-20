const http = require('http');

//server is event emiter

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify(['math','history','cs','science']));
        res.end();
    }
});


server.listen(4000);


console.log('Listening on port 4000...');