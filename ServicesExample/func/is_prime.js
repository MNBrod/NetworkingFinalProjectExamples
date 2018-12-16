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