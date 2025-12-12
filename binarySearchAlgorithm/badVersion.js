/*
First Bad Version

Problem Statement:
This problem finds the first bad version in a sequence of versions from 1 to n. We have an API isBadVersion(version) that returns whether a version is bad. We use binary search to pinpoint the earliest bad version.

Approach:
Initialize pointers: l = 1 and r = n.
While l < r:
Compute mid: m = l + floor((r - l) / 2).
If isBadVersion(m) is false → move right (l = m + 1).
Else (true) → move left or stay (r = m).
Loop ends when l == r, which is the first bad version.
Return r.
Time & Space Complexity:
Time Complexity: O(logn)

Space Complexity: O(1)

    */

var solution = function (isBadVersion) {
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (!isBadVersion(m)) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return r;
  };
};
