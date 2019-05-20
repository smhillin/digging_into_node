
// Sync Way
// console.log('What is the user name?')
// const name = getName();
// console.log(`The username is: ${name} `);
//
// function getName()  {
//     setTimeout(()=>{
//         console.log('Read name from database');
//         return { name: 'Shaun Hillin'};
//     }, 2000);
// }

console.log('What is the user name?')
getName((user) =>{
    console.log(`The username is: ${user.name}`);
});


function getName(callback)  {
    setTimeout(() =>{
        console.log('Read name from database...');
        callback({ name: 'Shaun Hillin'});
        return;
    }, 2000);
}

