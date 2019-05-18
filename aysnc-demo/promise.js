const p = new Promise(function(resolve, reject){
    setTimeout(() =>{
        console.log('Read name from database...');
        //resolve('Shaun');
        reject(new Error('message'));
    },2000);

});

p
    .then(result => console.log('Result:', result))
    .catch(err => console.log('Error', err.message));

