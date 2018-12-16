// This is an example of how a nodeJS thread might be used to solve
// distributable problems. This function waits for a message from some other
// process, and responds to that message by checking if that message is prime.
// There is very little error handling here: if the message is not an integer
// string, this process will crash (unfortunately, it will also crash silently).
// While this function is not implemented in any of our examples, it is here to
// show how it might be done.
process.on('message', async (message) => {
    var n = parseInt(message);
    n = isPrime(n);
    process.send({n});
});

var isPrime = function (n) {
    if (n == 0 || n == 1) return 0;
    var j = -1;
    var upperLimit = Math.sqrt(n);
    for (var i = 2; i < n; i++) {
        if (i > upperLimit) break;
        j = i + 0;
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}
