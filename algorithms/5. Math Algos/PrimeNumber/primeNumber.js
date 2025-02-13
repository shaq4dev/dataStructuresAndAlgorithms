// given a natural number, determine if a number is prime or not

// fn(n) => true / false

// for every number < n
// prime number is a number that can only be divided by 1 and itself.

// n must be > 1
// a loop that decrements from n (i)
// if n/i % 2 || n/i % 3 === 0 except for 2

// function prime(n) {
//   //...
//   for (i = n; i > 1; i--) {
//     if ((n / i - 1) % 2 || (n / i - 1) % 3 === 0) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(prime(8));
// console.log(prime(11));
// console.log(prime(15));

function prime(n) {
  // ...
  if (n < 2) {
    return false;
  }

  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(prime(1));
// console.log(prime(5));
// console.log(prime(4));

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

console.log(prime(1));
console.log(prime(5));
console.log(prime(4));
