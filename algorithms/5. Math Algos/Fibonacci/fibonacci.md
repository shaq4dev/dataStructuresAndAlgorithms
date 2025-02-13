# Fibonacci Sequence

Problem:

Given a number 'n', find the first 'n' elements of the Fibonacci sequence.

### What is the Fibonacci sequence

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the preceding ones.

The first two numbers in the sequence are 0 and 1.

E.g.

- Fibonacci(2) = [0, 1]
- Fibonacci(3) = [0, 1, 1]
- Fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

### Solution

```
function fibonacci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++>){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
```

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
