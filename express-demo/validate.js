/*jshint esversion: 6 */
const express = require('express');
const app = express();
const Joi = require('@hapi/joi');


app.use(express.json);

const students = [
    { id : 1, name: 'Chris', sex: 'Male'},
    {id: 2, name: 'Meghan', sex: 'Female'},
    {id: 3, name:'Jeff', sex: 'Male'},
    {id: 4, name:'Jamal', sex: 'Male'},
    {id: 4, name:'Mila', sex: 'Female'}
];


//Route Handlers


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/students', (req, res) => {
    console.log('Route Started');
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    console.log(result);
    if (result.error){
         res.status(400).send("Please re enter");
    }
    const student = {
         id: students.length + 1,
         name: req.body.name
     };
    students.push(student);
    res.send(student);
});



// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`listening on port ${port}.....`));




