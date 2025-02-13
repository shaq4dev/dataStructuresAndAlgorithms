# Factorial of a number

Problem:

Given an integer 'n', find the factorial of that integer.

### What is the factorial of a number?

In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

Also note that the factorial of _**0**_ is _**1**_.

E.g.

factorial(4) = 4 x 3 x 2 x 1 = 24
factorial(5) = 5 x 4 x 3 x 2 x 1 = 120

### Solution

```
function factorial(n){
    let result = 1

    for(let i = 2; i < n; i++){
        result = result * i
    }
    return result
}
```

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
