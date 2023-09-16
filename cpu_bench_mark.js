const { fib, dist } = require('cpu-benchmark')
 
const duration = fib(41) // Returns time required (ms) 
// to calculate the 41. fibonacci number recursively.
const ops = dist(10000) // Returns the amount of operations 
// (distance matrix calculations) in 1000ms

console.info(`duration`, duration);

console.info(`ops`, ops)