// The problem requires reversing the first k characters for every 2k characters in a string. If there are fewer than k characters left, reverse all of them. If there are between k and 2k characters left, reverse the first k and leave the rest as is.

// Steps
// Convert the string into a character array (if needed).
// Iterate over the array in steps of 2k.
// At each step, reverse the next k characters if available.
// Join or return the modified string.
// Dry Run
// Input: s = "abcdefg", k = 2

// First 2k = 4 chars: reverse first 2 → "bacd"
// Remaining = “efg”: reverse first 2 → "fe", keep “g”
// Output: "bacdfeg"
// Time & Space Complexity
// Time Complexity: O(n), where n = length of the string
// Space Complexity: O(1) if in-place, else O(n)

var reverseStr = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let n = Math.min(k, s.length - x);
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - 1 - i];
      s[x + n - 1 - i] = temp;
    }
  }
  return s.join("");
};
