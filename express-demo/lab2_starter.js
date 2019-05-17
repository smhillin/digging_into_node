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
    //TODO Welsome message
});


app.get('/api/students', (req,res) => {
//TODO
    //Create a get route “/api/students” that displays the contents of the “students” array in the browser window
});


app.post('/api/students', (req,res) => {
//TODO
    // takes two json arguments for name and title of student.
    // Create a dictionary student and add the student to the dictionary array students
    // Prints a confirmation to the console after the student is added
    // Print the title and names of all the students to the console after it is added
});


app.listen(3000, () => console.log("listening on port 3000"))