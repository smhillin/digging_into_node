const http = require('class-files/http')

//server is event emmiter
const server = http.createServer();

//register listener

server.on('connection', (socket) => {
    console.log('New connection');
});

server.listen(4000);


console.log('Listening on port 4000');