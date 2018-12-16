exports.find_primes = function (min, max) {
    var start = Date.now();
    var count = 0;
    for ( ; min < max; min++) {
        var prime = exports.is_prime(min)
        count += prime;
    }
    console.log(count);
    console.log('Time Elapsed (single): ' + Math.floor(Date.now() - start));
    return count;
}

exports.is_prime = function (n) {
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

