function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    // i = 2 skips the first multiplication which does nothing
    result = result * i;
  }
  return result;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
