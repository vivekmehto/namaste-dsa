// Problem Statement:
// Write a recursive function fact(n) that returns the factorial of a number n.

// Example:
// Input: 5

// Process: (5 * 4 * 3 * 2 * 1)

// Output: 120

// Concepts:
// Recursion: Repeatedly multiply n with fact (n-1).
// Base Case: fact(1) = 1.
// Recursive Case: n * fact(n - 1)
// Approach:
// If n == 1, return 1 (base case).
// Else, return n * fact(n - 1).
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(n) recursive call stack

function fact(n) {
  if (n <= 1) return 1;

  return n * fact(n - 1);
}
