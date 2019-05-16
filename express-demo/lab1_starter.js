/*jshint esversion: 6 */

const express = require('express');
const app = express();
app.use(express.json())


const students = [
    { id : 1, name: 'Chris', sex: 'Male'},
    {id: 2, name: 'Meghan', sex: 'Female'},
    {id: 3, name:'Jeff', sex: 'Male'},
    {id: 4, name:'Jamal', sex: 'Male'},
    {id: 5, name:'Mila', sex: 'Female'}
];

//Routing

app.get('/', (req, res) => {
    res.send("Welcome to digging in node.js");
});


app.get('/api/students', (req,res) => {
    //connect to database get classes
    res.send(['Chris', 'Jeff', 'Jamal']);
});


app.post('/api/students', (req,res) => {
    const student = {
        id: students.length,
        name: req.body.name
    };
    students.push(student);
    res.send(student);
});


app.listen(3000, () => console.log("listening on port 3000"))