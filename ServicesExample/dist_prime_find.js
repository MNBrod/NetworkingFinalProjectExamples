const axios = require('axios');
var querystring = require('querystring');

const MIN = 0;
const MAX = 2000000;
const NUM_WORKERS = 3;
const WORKER_PORTS = [1337, 1338, 1339];
const TASK_SIZE = 1000;
const NUM_TASKS = (MAX - MIN) / TASK_SIZE;

var url = "http://localhost:";

const requestBody = {
    min: '1',
    max: '1000000'
  };

  console.log(requestBody.min);
  
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

var makeRequest = function (port, min, max) {
  var body = {
    min,
    max
  };
  return axios.post(url + port + "/prime_single", querystring.stringify(body), config)
  .then((result) => {
    console.log(`There are ${result.data} primes in this range.`);
  })
  .catch((err) => {
    console.log(`Error posting: ${err}`);
  });
};

var main = function() {
  var received = 0;
  var sent = 0;
  var total = 0;
  while (true) {
    
  }
};

makeRequest(1337,1,1000000);