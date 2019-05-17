const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/demo', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))


const courseSchema = new mongoose.Schema({
    name: String,
    instructor: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    available: Number,
    isRunning: Boolean
});

//Create a Class of Courses
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

//Create an Object of Class

    const course = Course({
        name: 'Science',
        instructor: 'Shaun',
        tags: ['fun', 'interesting', 'software development'],
        available: 10,
        isRunning: true
    });

    //will assign id to
    const result = await course.save();
    console.log(result);
}

async function getAllCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function getCoursesByInstructor(name) {
    const courses = await Course
        .find({instructor :name});
    console.log(courses);
}

async function getCoursesBy() {
    const courses = await Course
        .find()
        .limit(10)
        .sort({name: 1})
        .select({name:1});
    console.log(courses);
}

async function getCoursesLogical() {
    const courses = await Course
        .find()
        .or([{instructor: 'Shaun'}, {course: 'Science'}])
    console.log(courses);
}

async function getCoursesRegular() {
    const courses = await Course.find({instructor:/^Sha/})
    console.log(courses);
}

async function getCoursesByAvailability() {
    const courses = await Course.find({available: { $gte: 1}});
    console.log(courses);
}


//createCourse();
//getAllCourses();
//getCoursesByInstructor('Shaun')
//getCoursesByAvailability();
//getCoursesLogical();

getCoursesRegular();

