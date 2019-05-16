const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    //connect to database get classes
    res.send(['math', 'science', 'history']);
});

app.listen(3000, () => console.log('listening on port 3000.....'));


//Environment Variable
//const port = process.env.PORT || 5000
//app.listen(port, () => console.log(`listening on port ${port}.....`));


//route for get course
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });

//route for query
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const students = [
    {id : 1, name: 'Chris', sex: 'Male'},
    {id: 2, name: 'Meghan', sex: 'Female'},
    {id: 3, name:'Jeff', sex: 'Male'},
    {id: 4, name:'Jamal', sex: 'Male'},
    {id: 4, name:'Mila', sex: 'Female'}
];

const Joi = require('@hapi/joi');
//app.use(express.json);

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.post('/api/students', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
//    const result = Joi.validate(req.body, schema);
    console.log(req.body);
    // if (result.error){
    //     res.status(400).send("Please re-enter");
    //     return;
    // }

    // const student = {
    //     id: students.length + 1,
    //     name: req.body.name
    // };
//    students.push(student);
//    res.send(student);
});