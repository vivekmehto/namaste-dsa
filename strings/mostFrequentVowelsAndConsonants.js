// This problem requires finding the most frequently occurring vowel and consonant characters in a string, and returning the sum of their frequencies.

// Steps
// Initialize a character frequency map using a loop.
// Define a list of vowels: ['a', 'e', 'i', 'o', 'u'].
// Traverse the string and count how often each character appears.
// Track the highest frequency vowel and the highest frequency consonant.
// Return the sum of those two highest values.
// Dry Run
// Input: s = "successes"

// Frequency map: { s: 4, u: 1, c: 2, e: 2 }
// Vowels: u(1), e(2) → maxVowels = 2
// Consonants: s(4), c(2) → maxConsonant = 4
// Output: 2 + 4 = 6
// Time & Space Complexity
// Time Complexity: O(n), where n = length of the string
// Space Complexity: O(k), where k = number of unique characters (at most 26 lowercase letters)



var maxFreqSum = function (s) {
    let map = {}
    for (i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            ++map[s[i]]
        }
    }

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowels = 0
    let maxConsonant = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (map[s[i]] > maxVowels) {
                maxVowels = map[s[i]]
            }
        }
        else {
            if (map[s[i]] > maxConsonant) {
                maxConsonant = map[s[i]]
            }
        }
    }
    return maxConsonant + maxVowels
};   