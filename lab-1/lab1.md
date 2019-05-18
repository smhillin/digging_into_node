


## Run the starter code exercise,js

    node exercise.js

## Exercise

Here we have an application that we have designed with callback request.  
When you run the code you should see that the code runs relatively slow. 
This is because we have set a 4 second delay on each one of the functions to 
simulate an I/O request that could take some time in real life.  

It does the following:

- Get's a user object from a data source in this case a dictionary
- Log user to console
- Check to see if the user is alumni
- If so returns top events
- Log top events to console
- Sends an email
- Logs email confirmation message to console

## Objective

Get yourself out of callback hell!  Rewrite the code using aysnc and await to speed up your code. 




