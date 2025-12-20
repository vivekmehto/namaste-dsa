// Square Root of X

// Problem Statement:
// This problem is about finding the floor value of the square root of a non-negative integer x. You cannot use built-in square root functions. The goal is to use binary search to compute the answer efficiently.

// Approach:
// If x is 0 or 1, return x.
// Set the binary search range: l = 2, r = floor(x / 2).
// Use binary search to find the greatest number m such that m * m ≤ x.
// If m * m === x, return m.
// If m * m > x, search left side.
// If m * m < x, search right side.
// Return r as the floor square root.

// Time & Space Complexity:

// Time Complexity: O(logx)

// Space Complexity: O(1)

var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (x === m * m) {
      return m;
    } else if (x < m * m) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return r;
};
