/* Find Peak in a Mountain Array

Problem Statement:
This algorithm finds the peak element in a mountain array using binary search. A mountain array increases to a peak and then decreases.

Approach:
Initialize l = 0 and r = arr.length - 1.
Use binary search:
If arr[m + 1] > arr[m], peak is to the right → l = m + 1.
Else peak is at m or to the left → r = m.
When loop ends, l (or r) is the peak index.
Time & Space Complexity:
Time Complexity: O(logn)

Space Complexity: O(1)

*/

var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m + 1] > arr[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return r;
};