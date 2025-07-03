/* Problem Statement:
Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

Requirements:
Handles both positive and negative integers.
Return 1 if n is 0(since 0 is a single-digit number).
Examples:
Input:259

Output:3

Input:-1035

Output:4

Input:0

Output:1

Approach:
Handle Zero:If n == 0, return 1 directly.
Convert to Positive:Use abs(n) to ignore sign.
Initialize a counter:Set count = 0.
Loop:While n > 0
Divide n by 10 using integer division.
Increment count.
Return: The count after the loop finishes. */

function countDigits (num) {
    if(num == 0) {
        return 1;
    }

    let n = Math.abs(num);
    let count = 0;
    while(n>0){
        n= Math.floor(n/10);
        count++;
    }

    return count;
}


console.log(countDigits(1234));
