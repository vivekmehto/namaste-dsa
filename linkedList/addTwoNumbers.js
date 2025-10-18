/*
Problem Statement:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the result as a linked list.

You may assume the two numbers do not contain any leading zeros, except the number 0 itself.

Examples:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 ≤ Node.val ≤ 9
It is guaranteed that the list represents a number that does not have leading zeros.
Approach:
Initialize a dummy node to build the result list and a carry variable set to 0.
Traverse both linked lists simultaneously. For each node, compute the sum of values plus carry.
Create a new node with sum % 10 and update carry to sum / 10.
Continue until both lists are exhausted and carry becomes 0.
Time and Space Complexity:
Time Complexity: O(n) where n is the length of the longer list.
Space Complexity: O(n) for the new list created.
*/

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
};
