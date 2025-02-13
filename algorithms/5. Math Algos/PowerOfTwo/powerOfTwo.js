// O(log n) solution
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

// console.log(isPowerOfTwo(4)); //true
// console.log(isPowerOfTwo(6)); //false
// console.log(isPowerOfTwo(8)); //true

/*

PSEUDOCODE

n = 8

8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)

if remainder is not 0 in any step, 'n' is not a power of 2

if remainder is 0 and 'n' comes down to 1 eventually, n is a power of two

*/

// O(1) solution
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(4)); //true
console.log(isPowerOfTwo(6)); //false
console.log(isPowerOfTwo(8)); //true

// 7 -> 111
// 6 -> 110
// result -> 110
