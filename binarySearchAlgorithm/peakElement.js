/*

Find Peak Element

Problem Statement:
This problem involves finding any **peak element** in an array. A peak element is an element that is strictly greater than its neighbors. The array is unsorted, but there’s guaranteed to be at least one peak.

Approach:
We use binary search to find a peak efficiently.
Initialize l = 0 and r = arr.length - 1.
While l < r:
Find middle: m = l + floor((r - l) / 2)
If arr[m] < arr[m + 1] → we are in ascending slope → shift l = m + 1.
Else → we are in descending slope or peak → move r = m.
Loop ends when l == r, that’s the index of a peak.


Time & Space Complexity:

Time Complexity: O(logn)

Space Complexity: O(1)

*/
var findPeakElement = function(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};