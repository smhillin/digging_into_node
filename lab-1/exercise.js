
//Check if user is alumni .  If they are offer them tickets to toip events
getUser(1, (user) => {
  console.log('user: ', user);
  if (user.alumni) {
    getTopEvents((events) => {
      console.log('Top events: ', events);
      sendEmail(user.email, events, () => {
        console.log('Email sent...')
      });
    });
  }
});
////
function getUser(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Shaun Hillin',
      alumni: true,
      email: 'shaun@natvz.io'
    });
  }, 4000);  
}

//get top events
function getTopEvents(callback) {
  setTimeout(() => {
    callback(['event_1', 'event_2', 'event_3']);
  }, 4000);
}

function sendEmail(email, events, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}