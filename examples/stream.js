const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to digging in node.js");
});

app.get('/api/courses', (req,res) => {
    //connect to database get classes
    res.send(['math', 'science', 'history'])
});

app.listen(3000, () => console.log('listening on port 3000.....'));
