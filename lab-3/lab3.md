## Step 1: Download Exercises

    curl https://github.com/smhillin/digging_into_node/blob/master/lab-3

## Step 2: Import database locally

    mongoimport --db mongo-exercises --collection courses --drop --file exercise-data.json --jsonArray

## Step 3: Create and Application that Does the Following:

## Part 1

- Get all the published backend courses
- Sort them by their name
- Pick only the name and author
- Display them

## Part 2

- Get all the published frontend and backend courses
- Sort them by their price in a descending order
- Pick only name and author
- Display them

