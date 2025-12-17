/*

Single Element in a Sorted Array

Problem Statement:
This algorithm finds the single non-duplicate element in a sorted array where every other element appears exactly twice.

Approach:

Use binary search between left (l) and right (r).
At each mid (m):
If arr[m] === arr[m - 1], count elements on the left.
If that count is odd → single lies left → r = m - 2.
If count is even → single lies right → l = m + 1.
Same logic applies if arr[m] === arr[m + 1].
If neither left nor right match → return arr[m].

Time & Space Complexity:

Time Complexity: O(logn)

Space Complexity: O(1)

*/

var singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === arr[m - 1]) {
            let leftCount = m - l;
            if (leftCount % 2 === 1) {
                r = m - 2;
            } else {
                l = m + 1;
            }
        } else if (arr[m] === arr[m + 1]) {
            let leftCount = m - l;
            if (leftCount % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        } else {
            return arr[m];
        }
    }
    return arr[l];
};
      
