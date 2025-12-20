// Despite the title, this problem focuses on finding the length of the last word in a given string. A word is defined as a sequence of non-space characters. The string may contain leading, trailing, or multiple spaces between words. The goal is to ignore these extra spaces and return the length of the final word.

// Steps
// Start from the end of the string.
// Skip any trailing spaces.
// Once a non-space character is found, start counting characters.
// Stop counting when a space is found after starting the count.
// Return the total count.

// Dry Run
// Input: s = " Hello World "
// Start from the end → skip spaces
// Start counting at ‘d’ of “World”
// Count characters: d, l, r, o, W → 5
// Stop at space → return 5

// Time & Space Complexity

// Time Complexity: O(n), where n is the length of the string
// Space Complexity: O(1), uses constant space



  var lengthOfLastWord = function (s) {
      let n = s.length - 1
      let count = 0
      while (n >= 0) {
          if (s[n] != " ") {
              ++count
          } else if (count > 0) {
              break
          }
          --n
      }
      return count
  };      
      