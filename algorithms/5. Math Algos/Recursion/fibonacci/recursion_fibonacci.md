# Fibonacci Sequence

Problem

Given a number 'n', find the nth element of the Fibonacci sequence.

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of two preceding ones.

The first two numbers in the sequence are 0 and 1. (0, 1, 2, 3, 5, 8...)

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

### Tips for recursive solutions

1. Figure out how to break down the problem into smaller versions of the same problem.
2. Identify the base case for recursion

## Solution

```
function fibonacci(n){
if(n < 2>){
    return n
}

return fibonacci(n-1) + fibonacci(n-2)

}
```

The recursive time complexity is O(2^n) --- this is really bad. It's one step away from the factorial time complexity.

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
