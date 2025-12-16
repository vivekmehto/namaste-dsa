/*
Find First and Last Position in Sorted Array

Problem Statement:

This problem asks us to find the first and last positions of a given target in a sorted array. If the target is not found, return [-1, -1].

Approach:

Use binary search twice.
Once to find the **first occurrence** (left bound).
Once to find the **last occurrence** (right bound).
Store results in ans[0] and ans[1].

Time & Space Complexity:

Time Complexity: O(logn)

Space Complexity: O(1)

*/


var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < target) l = m + 1;
        else r = m;
    }
    if (arr[l] === target) ans[0] = l;

    l = 0;
    r = arr.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (arr[m] > target) r = m - 1;
        else l = m;
    }
    if (arr[l] === target) ans[1] = l;
    return ans;
};
      