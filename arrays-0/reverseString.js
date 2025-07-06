/* Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

Examples:
Example 1:
Input:s = [“h”,”e”,”l”,”l”,”o”]

Output:[“o”,”l”,”l”,”e”,”h”]

Example 2:
Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

Output:[“h”,”a”,”n”,”n”,”a”,”H”]

Approach: Two Pointer Technique
Initialize two pointers, one at the start and one at the end of the array.
Swap the characters at both pointers.
Move the pointers towards the center until they meet.
Time Complexity:
Time Complexity = O(n)

Space Complexity:
Space Complexity = O(1)

Dry Run
Input: s = ["h", "e", "l", "l", "o"]

    len = 5, halfLen = 2
                    
    i = 0 → swap s[0] and s[4] → ["o", "e", "l", "l", "h"]
    i = 1 → swap s[1] and s[3] → ["o", "l", "l", "e", "h"]
                      
Output: Result: ["o", "l", "l", "e", "h"] */


function reverseString(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }
};