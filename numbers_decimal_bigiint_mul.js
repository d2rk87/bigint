const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const Decimal = require('decimal.js');

// add tests
suite.add('Number mul', function() {
  Math.round(input - 256);
},
{
  'setup': function() {
    var input = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER );
  }
})
.add('BigInt mul', function() {
  input - 256n;
},
{
  'setup': function() {
    var input = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
  }
})
.add('Decimal mul', function() {
  var input = (Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
  const m = new Decimal(input).mul(256);
},
{
  'setup': function() {
    var input = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
