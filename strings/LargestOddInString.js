// The task is to find the largest-valued odd number that can be formed from a given numeric string by removing trailing even digits. The number must be a substring starting from index 0 to some valid index.

// Steps
// Start from the end of the string and move backward.
// Check if the current digit is odd using modulus % 2.
// If an odd digit is found, return the substring from index 0 to that digit (inclusive).
// If no odd digit exists in the string, return an empty string.
// Dry Run
// Input: "52"

// Start from the end: ‘2’ → even → skip
// Next: ‘5’ → odd → return "5"
// Time & Space Complexity
// Time Complexity: O(n), where n is the length of the string
// Space Complexity: O(1), no extra space used

var largestOddNumber = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (Number(s[n]) % 2 == 1) {
      return s.substring(0, n + 1);
    }
    --n;
  }
  return "";
};
