// Problem:

// Given a number 'n', find the first 'n' elements of the Fibonacci sequence.

// e.g.

// f(2) = [0, 1]
// f(3) = [0, 1, 1]
// f(7) = [0, 1, 1, 2, 3, 5, 8]

// if n<2 -> print error
// if n === 2 -> print [0, 1] "base case"
// if n>2 -> next step

// for every (n) let index = n
// for each iteration fibArr = arr.push(i)

function fib(n) {
  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

console.log(fib(3));
