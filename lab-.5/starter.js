console.log('Before');
const student = getstudent("Shaun");
console.log(student);
console.log('After)';




function getStudent(name) {
    setTimeout(()=>{
        console.log('reading student form DB');
        return {name: name, major: 'literature'}
    }, 4000);

    return 1;
}
