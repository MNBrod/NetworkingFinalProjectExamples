// This is basically corresponds to the "imports" section in Java

// 'express' is an extremely convenient node.js server library. It handles a lot
// of things for us: it allows easy handling of HTTP requests, middleware,
// caching, authentication, among many other things. We do not implement anywhere
// close to the full functionality in this example.
const express = require("express");

// Morgan is a logging middleware app. It prints out nicely
// formatted logs of all requests/responses involving this
// server.
const morgan = require("morgan");

// This allows us to read POST data in as JSON, as opposed to having to parse a
// string.
var bodyParser = require('body-parser');

// Import the DB objects from other files.
const {db, User} = require('./models');

// Create an instance of our express server
const app = express();

// Tells the server to use the development version of Morgan.
app.use(morgan("dev"));

// Enables the use of bodyParser.
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// Response for GET to "http://IP:Port/"
app.get('/', (req, res) => {
    res.send(
    `Hello! This is a very simple example of the use of web services and databases.\n
      -If you send a GET request to /users, you will get an array of all the users in\n
      the database (each of them will be a JSON object)\n
      -If you send a POST request to addUser, it will create a user in the database\n
      You must send a 'name' and 'email' parameter as url-encoded values.`);
})

// Handles the GET/users request.
app.get('/users', (req, res) => {
  // Requests a list of users from the DB
  User.findAll()
    // when the DB responds, sends out the response
    .then(dbres => {
      res.status(200);
      res.send(dbres);
    })
})
// Handles the POST/addUser request.
app.post('/addUser', (req, res) => {
  var userName = req.body.name;
  var email = req.body.email;
  // Creates a user with the specified name and email
  User.create({
    name: userName,
    email: email
  })
  // Sends the appropriate HTTP code
  .then(dbres => {
    res.sendStatus(201);
  })
})

// Define the port to use
const PORT = 3000;
// Define the server initialization. We want to use await inside, so we have to
// define it as an async function.
const init = async () => {
  // This connects to the User table in the DB. force: true means that this will
  // Overwrite the existing table.
  await User.sync({force: true});
  // Creates one user
  await User.create({
  name: 'John',
  email: 'john@email.com'
  });
  // Tells the server to start listening.
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
// Calls the server-initialize function
init();





