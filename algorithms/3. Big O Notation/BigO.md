# Big O Notation

_The worst case complexity of an algorithm is represented using the Big O notation._

Big-O notation describes the complexity of an algorithm using algebraic terms.

It has two important characteristics

- It is express in terms of the input
- it focuses on the bigger picture without getting caught up in the minute details.

## Big-O Time complexity

_You don't have to do a calculation every time to figure out the complexity --- you can make some safe calculations._

_For E.g._

_Any time you see a loop in your algorithm, most of the time you can safely say that the time complexity is atleast O(n) linear._

1. find the sum of first (n) natural numbers.

   ```
   function summation(n){
       let sum = 0;
       for (let i = 1; i <= n; i++){
           sum += i
       }
       return sum
   }
   ```

   **The time complexity here is O(n) - Linear**

2. Here is another algorithm of the same problem:

   ```
   function summation(n){
       return (n * (n + 1)) / 2;
   }
   ```

   **The time complexity here is O(1) - Constant**

3. If there are two nested loops:

   ```
   for(i = 0; i <=n; i++){
       for(j = 0; j <= i; j++){
       ...some code
       }
   }
   ```

   **The time complexity here is O(n^2) - Quadratic**

4. If there are three nested loops:

   ```
   for(i = 0; i <=n; i++){
       for(j = 0; j <= i; j++){
           for(k = 0; k <= i; k++){
               ...some code
           }
       }
   }
   ```

   **The time complexity here is O(n^3) - Quadratic**

5. When the input size reduces by half every iteration:

   **The time complexity here is O(log n) - Logarithmic**

## Big-O Space complexity

1. When the algorithm does not need extra memory, or the memory needed does not depend on the input size:

   **The space complexity here is O(1) - Constant**

   E.g. Sorting algorithms which sort inside the array without utilizing additional arrays.

1. Where the extra space needed grows as the size of the input grows.

   **The space complexity here is O(n) - Linear**

1. When the extra space grows, but not at the same rate as the input size.

   **The space complexity here is O(log n) - Logarithmic**

_Although it is common to solve with quadratic time complexity, you should avoid trying to solve with quadratic space complexity._

###### Quick Markdown reference **[GUIDE](https://markdownlivepreview.com/)**
