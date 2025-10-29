/*

This approach checks if a string is a valid palindrome by using two pointers.
It ignores non-alphanumeric characters and is case -insensitive. 
A valid palindrome reads the same forward and backward after filtering.

Steps
Convert the string to lowercase to simplify comparison.
Initialize two pointers: one at the start and one at the end of the string.
Move both pointers toward the center while skipping non-alphanumeric characters.
Compare the characters at both pointers.
If they differ, return false. If they match, continue moving.
If all valid characters match, return true.
Dry Run
Input 1: "race a car"

Lowercase: "race a car"
Compare ‘r’ and ‘r’ → match
Compare ‘a’ and ‘a’ → match
Compare ‘c’ and ‘c’ → match
Compare ‘e’ and ‘a’ → mismatch
Return false
Input 2: "A man, a plan, a canal: Panama"

Lowercase: "a man, a plan, a canal: panama"
All alphanumeric characters match from start and end
Return true
Time & Space Complexity
Time Complexity: O(n), where n is the length of the string
Space Complexity: O(1), since no extra space is used beyond pointers
*/

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      ++i;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      --j;
    } else if (s[i] === s[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }
  return true;
};
