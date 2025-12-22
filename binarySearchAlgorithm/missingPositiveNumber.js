// Kth Missing Positive Number


// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

 

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

// We cannot apply binary search on the answer space here as we cannot assure which missing number has the possibility of being the kth missing number. That is why, we will do something different here. We will try to find the closest neighbors (i.e. Present in the array) for the kth missing number by counting the number of missing numbers for each element in the given array.

// Algorithm
// Start by setting two markers: one at the beginning and one at the end of the list.
// Keep checking the middle position between the two markers by taking their average.
// Count how many numbers are missing up to that middle position by subtracting the expected number from the actual number found at that point.
// If the number of missing values is less than the desired position, move your focus to the right side of the list by shifting the beginning marker ahead.
// If not, move your focus to the left side by shifting the end marker backward.
// Once you've narrowed down the search and exited the loop, return the final answer by adding the desired position to the last marker you checked (plus one).



var findKthPositive = function(arr, k) {
     let low = 0, high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let missing = arr[mid] - (mid + 1);

            if (missing < k) {
                low = mid + 1;
            } else {
                high = mid - 1; 
            }
        }

        return k + high + 1;
};