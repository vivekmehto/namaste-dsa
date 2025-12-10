/*
Lower Bound means:

The first index where the element is greater than or equal to (>=) the target value.

Example:
Array = [1, 2, 4, 4, 5, 7]
Target = 4
Lower Bound = index 2 (first 4)
*/



const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;
    let ans = arr.length;   
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] >= target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}