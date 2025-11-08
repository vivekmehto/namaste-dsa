// Implement Stack Using One Queue
// Problem Statement:
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x)Pushes element x to the top of the stack.
// int pop()Removes the element on the top of the stack and returns it..
// int top()Returns the element on the top of the stack.
// boolean empty()Returns true if the stack is empty, false otherwise.
// Notes

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue’s standard operations.
// Examples
// Example 1:

// Input:[“MyStack”, “push”, “push”, “top”, “pop”, “empty”] [[], [1], [2], [], [], []]

// Output:[null, null, null, 2, 2, false]

// Explanation MyStack myStack = new MyStack(); myStack.push(1); myStack.push(2); myStack.top(); // return 2 myStack.pop(); // return 2 myStack.empty(); // return False

// Constraints:
// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and topare valid.
// Follow-up: Can you implement the stack using only one queue?

// Approach: Implement Stack Using One Queue
// We simulate LIFO (stack) using only FIFO (queue) operations.
// We maintain a single queue (q).
// Remove the last pushed element (i.e., rear of q1).
// Insert it at the back (q.push(x)).
// Rotate the queue to bring the new element to the front by dequeuing and enqueuing all previous elements.
// Visualisation:
// stack
// Time Complexity:
// push → O(n)

// pop → O(1)

// top → O(1)

// empty → O(1)

// Space Complexity:
// Space Complexity = O(n)

// Where n is the total number of elements in the stack.

var MyStack = function () {
  this.q = [];
};

MyStack.prototype.push = function (x) {
  this.q.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  return this.q.shift();
};

MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  let front = this.q.shift();
  this.q.push(front);
  return front;
};

MyStack.prototype.empty = function () {
  return this.q.length === 0;
};
