console.log('Before');
getStudent('Shaun', (user) => {
    console.log(user);
});
console.log('After');


function getStudent(name, callback) {
    setTimeout(()=>{
        console.log('reading student form DB');
        callback ({name: name, major: 'literature'});
    }, 4000);
}