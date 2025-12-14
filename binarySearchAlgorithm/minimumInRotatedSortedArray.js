/*

Find Minimum in Rotated Sorted Array
       
Problem Statement:
This problem asks us to find the smallest element in an array that was originally sorted in ascending order and then rotated. The array has no duplicates.

Approach:
We use binary search to locate the minimum element efficiently.

Initialize l = 0 and r = a.length - 1.

While l ≤ r.
If a[l] ≤ a[r] → subarray is sorted → return a[l].
Find mid: m = l + floor((r - l) / 2).
If a[m] < a[m - 1] → pivot found → return a[m].
If a[l] > a[m] → rotation point is left → r = m - 1.
Else → rotation point is right → l = m + 1.
Time & Space Complexity:
Time Complexity: O(logn)

Space Complexity: O(1)

*/

var findMin = function(a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);
        if (a[m] < a[m - 1]) {
            return a[m];
        }

        if (a[l] > a[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};