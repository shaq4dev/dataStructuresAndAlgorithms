/* find the nth number of the fibonacci sequence.
 */
/* 
PSEUDOCODE
for n = 3

base case = [0, 1] √

create sequence up to the 3rd index
    - the next in the sequence equals the sum of the previous 2 items 

    instead of loop, call function recursively
    let each fib call new fib value

print the value of the 3rd index or last index

 */

// attempt

function fib(n) {
  // base case
  let arr = [0, 1];
  if (n < 2) return arr;

  for (i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
}

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(6));

// Solution

// If F represents a function to calculate the Fibonacci number, then

// Fn = F(n - 1) + F(n - 2);
// Base case is F0 = 0 & F1 = 1

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(38));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
