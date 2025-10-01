// Problem Statement:
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Examples:
// Example 1:
// Input: nums = [2, 2, 1]

// Output: 1

// Example 2:
// Input: nums = [4, 1, 2, 1, 2]

// Output: 4

// Example 3:
// Input: nums = [1]

// Output: 1

// Constraints:
// 1 ≤ nums.length ≤ 3 × 104
// -3 × 104 ≤ nums[i] ≤ 3 × 104
// Each element appears twice except one that appears only once.
// Approach 1 (Brute-force Hash Map):
// Create an empty hash map to store counts of each element.
// Loop through the array, update the count for each element.
// Loop again to find the element with count 1 and return it.
// Time Complexity:
// Time Complexity = O(n) We traverse the array twice: once for counting and once for checking.

// Space Complexity:
// Space Complexity = O(n) The hash map may store counts for up to n elements in the worst case.

// Dry Run
// Input: nums = [4, 2, 1, 0, 5]

// Step 1: Initialize hash = {}

// First loop (counting occurrences):
//     i = 0 → nums[0] = 4 → not in hash → hash = {4: 1}
//     i = 1 → nums[1] = 2 → not in hash → hash = {4: 1, 2: 1}
//     i = 2 → nums[2] = 1 → not in hash → hash = {4: 1, 2: 1, 1: 1}
//     i = 3 → nums[3] = 0 → not in hash → hash = {4: 1, 2: 1, 1: 1, 0: 1}
//     i = 4 → nums[4] = 5 → not in hash → hash = {4: 1, 2: 1, 1: 1, 0: 1, 5: 1}

// After first loop: hash = {4: 1, 2: 1, 1: 1, 0: 1, 5: 1}

// Second loop (finding element with count = 1):
//     i = 0 → nums[0] = 4 → hash[4] = 1 → return 4

// Final return = 4

// Output: 4

// Approch 1 Using hashmap

function singleNumber1(nums) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hashmap[nums[i]]) {
      hashmap[nums[i]] = 1;
    } else {
      hashmap[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]] === 1) {
      return hashmap[nums[i]];
    }
  }

  return -1;
}

// Approach 2 (Optimal using XOR):
// XOR of two same numbers is 0: a ^ a = 0.
// XOR of a number with 0 is the number itself: a ^ 0 = a
// So, if all elements occur twice except one, XOR-ing all gives that unique number.
// Time Complexity:
// Time Complexity = O(n) where n is the number of elements in the array.

// Space Complexity:
// Space Complexity = O(1) No extra space used.

// Dry Run
// Input: nums = [4, 2, 1, 0, 5]

// Step 1: Initialize xor = 0

// Loop through array:
//     i = 0 → xor = 0 ^ 4 = 4
//     i = 1 → xor = 4 ^ 2 = 6
//     i = 2 → xor = 6 ^ 1 = 7
//     i = 3 → xor = 7 ^ 0 = 7
//     i = 4 → xor = 7 ^ 5 = 2

// Final xor = 2

// Output: 2

function singleNumber2(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}
