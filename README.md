# MovieAdda

This project is created using Angular as frontend and node, express as backend and MongoDb as database.

## Setup
### Prerequisites
1 Node <br>
2 Angular CLI <br>
3 MongoDb <br>

Step 1: Clone the repository <br>
Step 2: Run `npm install` to install all the dependencies. <br>
Step 3: Upload the ./src/app/data.json in mongodb compass or create a collection named "movies" and insert all the data using the mongodb

## Frontend server

Run `ng serve` for frontend server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend server

Run `node ./src/backend/index.js` for backned server from the MovieAdda directory.

## Dependencies used

1 express: Express is a fast, unopinionated minimalist web framework for Node.js <br>
Following are some of the core features of Express:  <br>
A. Allows to set up middlewares to respond to HTTP Requests. <br>
B. Defines a routing table which is used to perform different actions based on HTTP Method and URL. <br>
C. Allows to dynamically render HTML Pages based on passing arguments to templates. <br>

2 cors: Cross-Origin Resource Sharing is a protocol that enables scripts running on a browser client to interact with resources from a different origin. <br>

3 mongoose:
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB <br>

4 ng-bootstrap : It is used to open a new modal in angular2+ <br>

5 @angular/youtube-player: It is used to play youtube videos in angular applications. <br>

6 angular-bootstrap-md: A boostrap module for angular application for making responsive design and some pre ready templates <br>

## My Approach to solve the problem

For backend I am using a API created by me which return the json movie object by providing the specific ID. I have stored all the movie information as same as I have in /src/app/data.json. In frontend I have created a card component where I run a loop to fetch the details of each card by providing the specific ID from the backend. On clicking on each of the card we get a detailed card where I show the same information that I have recived on the homepage for each movie card. Now by clicking on image portion of each  detail card we can go to the movie page using the angular routing here I just passes the id for each movie with the routing and recives this id in the moviePageComponent and then again calls the backend for the data using the id. Also I am running the movie trailer using the youtube player library as I was not able to setup the AWS account.
