# Factorial

Problem

Given an integer 'n', find the factorial of that integer.

The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

Also, the factorial of 0 is 1

E.g.

- factorial(4) = 4 x 3 x 2 x 1 = 24
- factorial(5) = 5 x 4 x 3 x 2 x 1 = 120

## Pseudocode

```
if n < 0 return false
F0 = 1

5! =>

5 x 4! x 3! x 2! x 1! x 0! =>

n! = n x (n-1)!

```

## code

```

function factorial(n){
    if(n === 0){
        return 1
    }

    return n * factorial(n-1)
}
```

### Time complexity analysis

- 5! => 5 x 4 x 3 x 2 x 1 (fn calls => 5)
- 4! => 4 x 3 x 2 x 1 (fn calls => 4)
- 3! => 3 x 2 x 1 (fn calls => 3)
- 2! => 2 x 1 (fn calls => 2)
- 1! => 1 x 1
- 0! => 1

As n increases, the number of executions completed executes at the same pace. Therefore, the time complexity is O(n) -> linear

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
