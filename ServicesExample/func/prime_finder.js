exports.find_primes = function (min, max) {
    var count = 0;
    console.log("HERE" + min + " " + max)
    for ( var n = min; n < max; n++) {
        var prime = exports.is_prime(n)
        count += prime;
    }
    return count;
}

exports.is_prime = function (n) {
    if (n == 0 || n == 1) return 0;
    var upperLimit = Math.sqrt(n);
    for (var i = 2; i < n; i++) {
        if (i > upperLimit) break;
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}

