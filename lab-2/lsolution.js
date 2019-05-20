/*jshint esversion: 6 */

const express = require('express');
const app = express();
app.use(express.json())
const path = require('path');


const students = [
    {id : 1, name: 'Chris', title: 'Mr.'},
    {id: 2, name: 'Meghan', title: 'Mrs.'},
    {id: 3, name:'Jeff', title: 'Sir'},
    {id: 4, name:'Jamal', title: 'Dr.'},
    {id: 5, name:'Mila', title: 'Miss'}
];

//Routing

app.use(express.static( path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Welcome to Lab 1 of digging in node.js");
});


app.get('/contact_lab1', (req,res) => {
    res.sendFile(__dirname + '/public/lab1_test.html');
});

app.get('/api/students', (req,res) => {
    res.send(students);
});


app.post('/api/students', (req,res) => {
    const student = {
        id: students.length,
        name: req.body.name,
        title: req.body.title
    };
    students.push(student);
    for (let s of students){
        console.log(`Hello ${s['title']} ${s['name']} !`);
    }
    res.send(student);
});


app.listen(3000, () => console.log("listening on port 3000"))
