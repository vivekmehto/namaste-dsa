// Min Stack

// Problem Statement:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack()initializes the stack object.
// void push(int val)pushes the element val onto the stack.
// void pop()removes the element on the top of the stack.
// int top()gets the top element of the stack.
// int getMin()retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Examples:
// Example 1:

// Input:

// [“MinStack”,”push”,”push”,”push”,”getMin”,”pop”,”top”,”getMin”]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output:[null,null,null,null,-3,null,0,-2]

// Explanation

//         MinStack minStack = new MinStack();
//         minStack.push(-2);
//         minStack.push(0);
//         minStack.push(-3);
//         minStack.getMin(); // return -3
//         minStack.pop();
//         minStack.top();    // return 0
//         minStack.getMin(); // return -2

// Constraints:
// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin
// Approach:
// Initialize stack, Use an array s to store pairs [value, currentMin].
// push(val)
// If stack is empty, push [val, val].
// Else, push [val, min(val, top’s min)].
// pop(): Remove the top element using pop().
// top(): Return the top value: s[s.length - 1][0].
// getMin(): Return the current minimum: s[s.length - 1][1].
// Visualisation:
// stack
// Time Complexity:
// All operations: O(1)

// Space Complexity:
// Space Complexity = O(n)

var MinStack = function () {
  this.s = [];
};
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    let minVal = Math.min(val, this.s[this.s.length - 1][1]);
    this.s.push([val, minVal]);
  }
};
MinStack.prototype.pop = function () {
  this.s.pop();
};
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};
