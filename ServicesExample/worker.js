/**
 * This code behaves similarly to MPI. There are a certain number of processes
 * started, equal the the number of threads that the computer has availible to
 * be used (I subtracted one from this number to leave an extra thread open for
 * use in examples running at the same time). Each of these tasks then is
 * assigned a number. If the task is the master task, then it initializes the
 * other tasks. If it is not the master, then it sets up a server sharing the
 * port. While the idea of sharing a port between multiple threads seems
 * unusual, it actually makes a lot of sense: the port is connected to node, and
 * node internally links each process to that port.
 */

// Imports cluster, which allows for multiple processing
const cluster = require('cluster');

// Gives us the number of availible cores
const numCPUs = require('os').cpus().length - 1;

// If this is the rank 0 thread
if (cluster.isMaster) {
  // Fork workers ().
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // This is explained in the Database example code.
  var morgan = require('morgan');
  var bodyParser = require('body-parser');
  var primeFinder = require('./func/prime_finder');
  const PORT = 1337;
  var express = require('express');
  var app = express();

  // logging middleware. This prints out the incoming requests to the server to the console
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
  app.use(bodyParser.json()); // would be for AJAX requests


  // start the server
  var server = app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
  });

  // If we want to serve files from the /public directory, uncomment this line:
  // app.use(express.static(path.join(__dirname, '/public')));

  app.get('/', (req, res) => {
    res.send('Hello!');
  });

  app.post('/add', (req, res) =>{
    console.log("This is the data recieved in the POST:\n" + JSON.stringify(req.body));
    var a = parseInt(req.body.min);
    var b = parseInt(req.body.max);
    var c = a + b;
    res.send(c.toString());
  });

  app.post('/prime', (req, res) => {
    var min = parseInt(req.body.min);
    var max = parseInt(req.body.max);
    var result = primeFinder.find_primes(min, max).toString();
    console.log(`Received on worker: ${cluster.worker.id}`);
    res.send(result);
  });

  app.post('/concat', (req, res) => {
    res.sendStatus(200);
    res.send(req.body.a + req.body.b);
  })
}
