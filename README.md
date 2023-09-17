# how to run 

`benchmarks % node numbers_decimal_bigiint_mul.js`

`benchmarks % node numbers_decimal_bigiint_div.js`

`benchmarks % node numbers_decimal_bigiint_sub.js`

`benchmarks % node numbers_decimal_bigiint_add.js`

# reuslts
|     | number                                          | bigInt                                          | Decimal                                     |
|-----|-------------------------------------------------|-------------------------------------------------|---------------------------------------------|
| mul | 1,131,252,429 ops/sec ±0.11% (101 runs sampled) | 1,129,760,483 ops/sec ±0.10% (98 runs sampled)  | 2,123,623 ops/sec ±0.37% (100 runs sampled) |
| div | 1,124,374,359 ops/sec ±0.55% (95 runs sampled)  | 45,615,716 ops/sec ±0.45% (103 runs sampled)    | 1,239,744 ops/sec ±0.21% (98 runs sampled)  |
| sub | 1,126,521,139 ops/sec ±0.39% (99 runs sampled)  | 1,129,632,739 ops/sec ±0.09% (100 runs sampled) | 2,505,800 ops/sec ±0.32% (102 runs sampled) |
| add | 1,127,887,005 ops/sec ±0.19% (98 runs sampled)  | 1,108,738,611 ops/sec ±0.36% (96 runs sampled)  | 2,367,174 ops/sec ±0.88% (93 runs sampled)  |


