//class EventEmmitter

const EventEmitter = require('class-files/events');

//create object of event emmitter
const emitter = new EventEmitter();



//register a listener for that event

emitter.on('messageLogged',  (arg) => {
    console.log('Listener called');
    console.log("business:" + arg.id);
    console.log("website:"+arg.url);
});


//raise event has happened and passes the args to event listener

emitter.emit('messageLogged', {id: 'Cloud Natvz', url:'http://natvz.io'});


