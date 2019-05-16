/*jshint esversion: 6 */

const express = require('express');
const app = express();
app.use(express.json());

courses = ['math', 'science', 'history']


app.get('/', (req, res) => {
    res.send("Welcome to digging in node.js");
});


app.get('/api/courses', (req,res) => {
    //connect to database get classes
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.post('/api/courses/add', (req, res) => {
    const course = req.body.course;
    courses.push(course);
    console.log(`Course ${course} was added`);
    console.log(`Courses available are now ${courses}`);
    res.send(course);
});



app.listen(5000, () => console.log("listening on port 5000"))