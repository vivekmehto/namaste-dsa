// Problem Statement:
// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

// Example:
// Input: 5

// Process: 5 + 4 + 3 + 2 + 1 = 15

// Output: 15

// Concepts:
// Recursion: A technique where a function calls itself with a reduced subproblem.
// Base Case: Stops recursion to prevent infinite calls. Here, if n === 0, return 0.
// Recursive Case: Return n + sum(n - 1).
// Approach:
// Use recursion to reduce the problem.
// Base case: if n === 0, return 0.
// Recursive case:return n + sum(n-1).
// This keeps adding numbers until n reaches 0, giving the total sum.
// Time & Space Complexity:
// Time Complexity: O(n) one call per value from n to 0.

// Space Complexity: O(n) due to call stack in recursion.

function sum(n) {
  if (n == 0) return 0;

  return n + sum(n - 1);
}

// Problem Statement:
// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

// Example:
// Input: [5, 2, 6, 1, 3]

// Process: 5 + 2 + 6 + 1 + 3 = 17

// Output: 17

// Concepts:
// Recursion: The function keeps summing the element at index n and calls itself with n-1.
// Base Case: If n == 0, return the first element.
// Recursive Case: Return arr[n] + sum(n - 1).
// Approach:
// If n == 0, return arr[0].
// Otherwise, return arr[n] + sum(n - 1).
// Time & Space Complexity:
// Time Complexity: O(n) one recursive call per element.

// Space Complexity: O(n) Due to call stack.

function sumArr(n) {
  if (n == 0) return arr[0];

  return arr[n] + sumArr(n - 1);
}

// Problem Statement:
// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

// Example:
// Input: [5, 2, 6, 1, 3]

// Odd Numbers: 5, 1, 3

// Output: 9

// Concepts:
// Recursion: Repeatedly check whether arr[n] is odd, and add it only if true true.
// Base Case: If n == 0, return arr[0] if it’s odd, otherwise 0.
// Recursive Case: Return (arr[n] if odd) + sum(n - 1).
// Approach:
// Check if arr[n] is odd.
// If yes, add it to recursive result of sum(n-1).
// Else, skip it and continue recursion.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(n) recursive call stack

let arr = [5, 2, 6, 1, 3];

function sum(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr[0] : 0;
  return (isOdd ? arr[n] : 0) + sum(n - 1);
}
