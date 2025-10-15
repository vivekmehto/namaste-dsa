// Linked List
// A Linked List is a linear data structure in which elements (called nodes) are connected using pointers. Each node contains:

// A value (the actual data)
// A reference (or pointer) to the next node (and optionally to the previous node in doubly linked lists)
// Types of Linked Lists:
// 1. Singly Linked List
// value: the data part
// next: a pointer/reference to the next node
// It moves only in one direction (forward)
// Structure: [value | next] -> [value | next] -> [value | null]
// 2. Doubly Linked List
// value: the data
// next: pointer to the next node
// prev: pointer to the previous node
// Allows bidirectional traversal
// Structure: null <- [prev | value | next] <-> [prev | value | next] -> null
// Key Terminologies:
// Head: The first node of a linked list. It marks the entry point and points to the next node.
// Tail: The last node of a linked list. It points to null because there’s no node after it.
// Linked List Representation: It is typically represented using its head node.

/**
Problem Statement:
Design and implement a simple singly linked list using basic building blocks like nodes and references (or pointers). The goal is to:

Define a node with a value and a pointer to the next node.
Create individual nodes and link them together to form a list.
Traverse the list from the head and print each node’s value.
This helps you understand how data is stored and accessed sequentially in memory using pointers or references.

Example:
Input: Create 3 nodes with values 10, 20, 30 and link them in order.

Output: Print values in sequence: 10 20 30

Approach:
1. Define a Node class or structure with a val and next pointer.
2. Create individual nodes (e.g., node1, node2, node3).
3. Link the nodes: node1.next → node2, node2.next → node3.
4. Set the head of the list to the first node.
5. Traverse the list using a loop until the current node becomes null (or None).
6. Print the value at each node.
Explanation:
Each node stores data and a reference to the next node.
The list is connected by linking nodes via the next field.
The traversal starts from the head and moves node by node until the end.
This basic structure forms the foundation for many advanced data structures like stacks, queues, and graph adjacency lists.
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

const list = new MyLinkedList();

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

node1.next = node2;
node2.next = node3;

list.head = node1;
list.size = 3;

let current = list.head;
while (current) {
  console.log(current.val);
  current = current.next;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next;
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (!this.head) this.head = newNode;
  else {
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);
  const newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) curr = curr.next;
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) this.head = this.head.next;
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--;
};
