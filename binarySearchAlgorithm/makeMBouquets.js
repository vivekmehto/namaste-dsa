/*
Minimum days to make M bouquets

Problem Statement: 

You are given 'N’ roses and you are also given an array 'arr' 
where 'arr[i]' denotes that the 'ith' 
rose will bloom on the 'arr[i]th' day. 
You can only pick already bloomed roses that are adjacent to make a bouquet. 
You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet. 
Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. 
Return -1 if it is not possible.

Example 1:
Input Format: N = 8, arr[] = {7, 7, 7, 7, 13, 11, 12, 7}, m = 2, k = 3
Result: 12
Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

Example 2:
Input Format: N = 5, arr[] = {1, 10, 3, 10, 2}, m = 3, k = 2
Result: -1
Explanation: If we want to make 3 bouquets of 2 flowers each, we need at least 6 flowers. But we are given only 5 flowers, so, we cannot make the bouquets.

                
Algorithm
If m*k > arr.size: This means we have insufficient flowers. So, it is impossible to make m bouquets and we will return -1.
Next, we will find the maximum element i.e. max(arr[]), and the minimum element i.e. min(arr[]) in the array.
Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to min(arr[]) and the high will point to max(arr[]).
Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the following formula: mid = (low+high) // 2 ( ‘//’ refers to integer division)
Eliminate the halves based on the value returned by possible(): We will pass the potential answer, represented by the variable 'mid' (which corresponds to a specific day), to the 'possible()' function.
If possible() returns true: On satisfying this condition, we can conclude that the number ‘mid’ is one of our possible answers. But we want the minimum number. So, we will eliminate the right half and consider the left half(i.e. high = mid-1).
Otherwise, the value mid is smaller than the number we want. This means the numbers greater than ‘mid’ should be considered and the right half of ‘mid’ consists of such numbers. So, we will eliminate the left half and consider the right half(i.e. low = mid+1).
Finally, outside the loop, we will return the value of low as the pointer will be pointing to the answer.


Complexity Analysis

Time Complexity: O(1) O(log(max(arr[])-min(arr[])+1) * N), where {max(arr[]) -> maximum element of the array, min(arr[]) -> minimum element of the array, N = size of the array}.

Space Complexity : O(h)O(1) as we are not using any extra space to solve this problem.
*/

const isPossible = (arr, m, k, day) => {
  let counter = 0;
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) {
      counter++;
    } else {
      ans += Math.floor(counter / k);
      counter = 0;
    }
  }
  ans += Math.floor(counter / k);
  return ans >= m;
};

var minDays = function (bloomDay, m, k) {
  let l = Math.min(...bloomDay);
  let r = Math.max(...bloomDay);

  if (m * k > bloomDay.length) {
    return -1;
  }

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (isPossible(bloomDay, m, k, mid)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
