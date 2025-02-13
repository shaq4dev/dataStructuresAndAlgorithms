# Prime Number

###### How to test for primality

Problem:

Given a natural number 'n', determine if the number is prime or not.

### What is a Prime Number?

A prime number is a natural number that is greater than 1, but is not a product of 2 smaller natural numbers.

E.g.

isPrime(5) = true (1 x 5 or 5 x 1)

isPrime(4) = false (1 x 4 or 2 x 2 or 4 x 1)

## Solution

```
function prime(n){
    if(n < 2){
        console.log('Error!')
    }

    for(i = 2; i < n; i++>){
        if(n % i === 0) {
            return false
        }
    }

    return true
}
```

The time complexity here is O(n) linear.

# Optimal Primality Test

Integers larger than the √n do not need to be checked because, whenever 'n = a x b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'.

For E.g.

- n=24, a=4 and b=6
- The square root of 24 is 4.89
- 4 is less than 4.89
- a is less than the √n
- n=35, a=5 and b=7
- The square root of 35 is 5.91
- 5 is less than 5.91
- a is less than the √n

## Solution

```
function prime(n) {
  // ...
  if (n < 2) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
```

The time complexity here is O(√n)

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
