/*

Capacity to Ship Packages within D Days

Problem Statement: 
You are the owner of a Shipment company. 
You use conveyor belts to ship packages from one port to another. 
The packages must be shipped within 'd' days. 
The weights of the packages are given in an array 'of weights'. 
The packages are loaded on the conveyor belts every day in the same order as they appear in the array. 
The loaded weights must not exceed the maximum weight capacity of the ship. 
Find out the least-weight capacity so that you can ship all the packages within 'd' days .


Input: N = 5, weights = [5, 4, 5, 2, 3, 4, 5, 6], d = 5
Output: 9
Explanation: The minimum ship capacity needed to ship all packages within 5 days is 9.

Input: N = 3, weights = [1, 2, 3, 4, 5], d = 2
Output: 9
Explanation: With a capacity of 9, the packages can be shipped in 2 days as [1,2,3,4] and [5].


We want to find the minimum ship capacity that allows shipping all packages within the given number of days. The capacity must be at least the heaviest package because you can’t split a package. 
At the same time, the capacity can be at most the sum of all packages (if you ship everything in one day). 
So the answer lies between these two extremes. 
Using binary search on this range lets us efficiently find the smallest capacity that works. For each candidate capacity,
 we check if it’s possible to ship all packages within the given days by greedily accumulating package weights until we reach capacity, then moving to the next day.
Set the lower bound as the maximum weight in the packages.
Set the upper bound as the sum of all package weights.
While the lower bound is less than or equal to the upper bound, do:
Pick the middle value between lower and upper bounds as the candidate capacity.
Simulate shipping with this capacity: accumulate package weights until capacity is reached, then count a day and reset accumulation.
If the number of days used is within the allowed days, move the upper bound down to try smaller capacities.
If the number of days exceeds the allowed days, increase the lower bound to try larger capacities.
Return the lower bound when the search finishes as the minimum capacity needed.


Complexity Analysis

Time Complexity: O(N * log(S)), where N is number of packages and S is the search space (sum_weights - max_weight). Each binary search step takes O(N), repeated O(log S) times.

Space Complexity: O(1), constant extra space used.

*/

const findDays = (arr, cap) => {
    let day = 1, load = 0;

    for(let i=0; i<arr.length; i++){
        if((load + arr[i]) > cap){
            day +=1;
            load = arr[i];
        }else {
            load += arr[i];
        }
    }
    return day;
}

var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights);
    let r = weights.reduce((a, c) => a+c, 0);
    console.log(l, r)

    while(l <= r){
        let m = Math.floor((l+r)/2);

        if(findDays(weights, m) <= days){
            r= m-1;
        }else {
            l = m+1;
        }
    }

    return l;
};