# experement target
check cpu performance with different cpu requests on k8s 

    - nolimit

    - 25m

    - 250m

    - 1000m

    - 2000m



script: cpu_bench_mark.js
```const { fib, dist } = require('cpu-benchmark')
 
const duration = fib(41) // Returns time required (ms) 
// to calculate the 41. fibonacci number recursively.
const ops = dist(10000) // Returns the amount of operations 
// (distance matrix calculations) in 1000ms

console.info(`duration`, duration);

console.info(`ops`, ops)```

`before start, ram request checked and figureout that not inmicat on results`

# os

```
duration 1160
ops 18578478
```

# nolimit

```
duration 1144
ops 16821839
```

# 25m

```
duration 2328
ops 7762087
```


# 250m

```
duration 2298
ops 7813687
```


# 500m

```
duration 1905
ops 9517888
```


# 1000m

```
duration 1155
ops 16116119
```


# 2000m

```
duration 1126
ops 17138156
```
