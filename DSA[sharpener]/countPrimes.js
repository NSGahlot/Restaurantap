function countPrimes(n) {
    const primes = Array(n+1).fill(true);
    primes[0] = true;
    primes[1] = true;
    for(let i=2; i<=n; i++) {
        if(primes[i]) {
            for(let j=2; i * j <= n; j++) { // this j is table
                primes[i * j] = false;
            }
        }
    }
    let count = 0;
    for(let i=2; i<n; i++) {
        if(primes[i]) {
            count++;
        }
    }
    return count;
}

let ans = countPrimes(10);
console.log(ans);