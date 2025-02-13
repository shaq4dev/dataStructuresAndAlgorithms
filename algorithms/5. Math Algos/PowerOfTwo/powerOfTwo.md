# Power of two

Problem:

Given a positive integer 'n', determine if the number is a power of 2 or not.

An integer is a power of two if there exists an integer 'x' such that 'n' === 2.

- isPowerOfTwo(1) = true (2^0)
- isPowerOfTwo(2) = true (2^1)
- isPowerOfTwo(5) = false

## Solution O(log n)

### Pseudocode

```
n = 8

8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)

if remainder is not 0 in any step, 'n' is not a power of 2

if remainder is 0 and 'n' comes down to 1 eventually, n is a power of two

```

### Code

```

function isPowerOfTwo(n){
    if(n < 1){
        return false
    }

    while(n > 0){
        if(n % 2 !== 0){
            return false
        }

        n = n/2
    }

    return true
}
```

The Big O of this algorithm is _**O(log n) logarithmic.**_

- You might think that because there's a while loop that the time complexity is linear. However, on each iteration of this while loop n's size is being reduced by half --- hence, this is a logarithmic time complexity.

## Solution O(1)

```
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
```

## Bitwise Power of Two

In binary, a number that is a power of 2 (except for 1) ends with 0.

E.g.

```
1 -> 1
2 -> 10
4 -> 100
8 -> 1000
16 -> 10000
```

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
