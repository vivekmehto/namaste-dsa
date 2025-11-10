// Valid Parentheses

// Problem Statement:
// Given a string s containing just the characters '(', ‘)’, ‘{‘, ‘}’, ‘[‘ and ‘]’, determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = “()”

// Output: true

// Example 2:
// Input: s = “()[]{}”

// Output: true

// Example 3:

// Input: s = “(]”

// Output: false

// Example 4:

// Input: s = “([])”

// Output: true

// Example 5:

// Input: s = “([)]”

// Output: false

// Constraints:
// 1<= s.length <= 104
// s consists of parentheses only '()[]{}'.
// Approach:
// Use a stack to track opening brackets.
// Create a map that stores matching pairs → { : }, [ : ], ( : ).
// Traverse the string:
// If it’s an opening bracket, push it onto the stack.
// If it’s a closing bracket, pop from the stack and check if it matches the expected closing bracket. If not, return false.
// After processing, if the stack is empty → all brackets matched → return true. Otherwise, return false.
// Time & Space Complexity:
// Time Complexity: O(n)

// Space Complexity: O(n)

var isValid = function (s) {
  let stack = [];

  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || s[i] != map[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
