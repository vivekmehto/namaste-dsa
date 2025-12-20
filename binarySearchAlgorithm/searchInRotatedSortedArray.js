/*

Problem Statement:
This problem requires finding a target value in a rotated sorted array nums. Using a modified binary search, we determine which half of the array is sorted in each iteration and narrow the search range accordingly.

Approach:
Initialize two pointers: l = 0 and r = nums.length - 1.
While l ≤ r:
Compute mid: m = l + floor((r - l) / 2).
If nums[m] === target, return m.
Check which side is sorted:
If nums[l] ≤ nums[m], left side is sorted:
If target ∈ [nums[l], nums[m]], move left: r = m - 1.
Else, move right: l = m + 1.
Else, right side is sorted:
If target ∈ (nums[m], nums[r]], move right: l = m + 1.
Else, move left: r = m - 1.
If not found, return -1.

Time & Space Complexity:

Time Complexity: O(logn)

Space Complexity: O(1)

*/

var search = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            return m;
        }
        
        if (arr[l] <= arr[m]) {
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};