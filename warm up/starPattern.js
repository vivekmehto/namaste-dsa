/* Pattern 1: 
Print nxn Star Square
Print a square pattern of stars (*) of size n x n.

Output
* * * *
* * * *
* * * *
* * * *

Approach:
● Outer Loop (Rows): Run from i = 0 to i = n - 1
● Inner Loop (Columns): For each row, loop from j = 0 to j = n - 1
● Build Row String: Append *in each inner loop iteration.
● Print Row:After the inner loop, print the complete row string.

Time & Space Complexity:
Time Complexity:O(n^2)

Space Complexity:O(n)(temporary row string) */

function starPattern1(n){

    for(let i=0; i<n; i++){
        let row="";
        for(let j=0; j<n; j++){
           row += " * ";
        }
        console.log(row);
    }

}


// starPattern1(4);


/* Pattern 2: 
Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.

Output
*
* *
* * *
* * * *
Approach:
● Outer Loop (Rows): Run a loop from i = 0 to i = n - 1. Each iteration represents one row.
● Inner Loop (Stars per Row): For each row irun another loop from j = 0 to j = iand append a *character to a string.
● Print Row:Print the string after the inner loop, completes for each row.
Time & Space Complexity:
Time Complexity:O(n^2)because the total number of stars printed is1+2+3+.......+n = n(n+1)/2.

Space Complexity:O(n)for the temporary string variable storing each row. */


function starPattern2 (n){
    for(let i=0; i<n; i++){
        let row ="";
        for(let j=0; j<i+1; j++){
            row += " * ";
        }
        console.log(row);
    }
}


// starPattern2(4);



/* Pattern 3: 
Print a Right-Angled Number Triangle
Write a program that prints a right-angled triangle of numbers of heightn.

Output
1
1 2
1 2 3
1 2 3 4
Approach:
● Outer loop (Rows): Run a loop from i = 0to i < n.Each iteration represents a new row.
● Inner loop (Numbers):Run an inner loop from j = 0to j <= i, and append j+1to the row.
● Build and Print: Construct a string for the row and print it after the inner loop ends.
Time & Space Complexity:
Time Complexity: O(n^2)Each row can have up to nnumbers.

Space Complexity:O(n)Temporary string to build each row. */


function starPattern3 (n){
    for(let i=0; i<n; i++){
        let row ="";
        for(let j=0; j<i+1; j++){
            row += (j+1);
        }
        console.log(row);
    }
}


// starPattern3(4);



/* Pattern 4: 
Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.

Output
1
2 2
3 3 3
4 4 4 4
Approach:
● Outer loop (Rows): Loop from i = 0to i < n.
● Inner loop (Numbers):Loop fromj = 0to j <= i, appending i+1as a string.
● Build and Print: Build the row string and print it.
Time & Space Complexity:
Time Complexity: O(n^2)

Space Complexity:O(n)for the temporary row string. */


function starPattern4 (n){

    for(let i=1; i<=n; i++){
        let row ="";
        for(let j=1; j<=i; j++){
            row += i;
        }
        console.log(row);
    }
}

// starPattern4(4);


/* Pattern 5: 
Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

Output
1 2 3 4
1 2 3
1 2
1
Approach:
● Outer loop (Rows): Loopifrom0 to n - 1.Each iteration represents a row.
● Inner loop (Print Numbers):For each row, loopjfrom0to n-i-1 and append j+1to a row string.
● Print Row: After the inner loop, print the row string.
Time & Space Complexity:
Time Complexity: O(n^2)

Space Complexity:O(n)for the temporary row string. */


function starPattern5 (n){

    for(let i=1; i<=n; i++){
        let row ="";
        for(let j=1; j<= n-i+1; j++){
            row += j;
        }
        console.log(row);
    }
}


// starPattern5(4);



/* Pattern 6: 
Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

Output
      *
    * *
  * * *
* * * *
Approach:
● Outer loop (Rows): Loopi = 0from0ton-1.Each iteration is a new row.
● Inner loop 1(Spaces):For each row, addn - i - 1spaces before the stars to right-align the triangle.
● Inner loop 2(Stars):Addi+1stars after the spaces.
● Print Row: Combine the spaces and stars, then print the row.
Time & Space Complexity:
Time Complexity: O(n^2)

Space Complexity:O(n)for the row string. */


function starPattern6 (n){
    for(let i=0; i<n; i++){
        let row ="";
        for(let j=0; j<n; j++){
            if(j <n-i-1){
                row += " ";
            }else {
                row += "*";
            }
        }
        console.log(row);
    }

}


// starPattern6(4);


/* Pattern 7:
Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0
Approach:
● Outer loop (Rows): Loopifrom0ton-1.
● Initialize toggle = 1:Start each row withtoggle = 1..
● Inner loop (Columns):For each row, loopjfrom 0toi. On each iteration:
Appendtoggleto the row string.
Fliptogglebetween 1 and 0.
● Print Row: After inner loop, print the row string.
Time & Space Complexity:
Time Complexity: O(n^2)

Space Complexity:O(n)per row */


function starPattern7(n){

    

    for(let i=0; i<n; i++){
        let flag =1;
        let row ="";
        for(j=0; j<= i; j++){
            row += flag; 
            flag == 1 ? flag = 0 : flag = 1;
        }
        console.log(row);
    }
}


// starPattern7(4);


/* Pattern 8: 
Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

Output
1
0 1
0 1 0
1 0 1 0
Approach:
● Global Toggle Variable: Declaretoggle = 1before the outer loop.
● Outer Loop:Loopifrom0ton-1.
● Inner loop:Loopjfrom0toi.On each iteration:
● Append:toggleto the row string.
● Flip:toggle1 -> 0and0 -> 1.
● Print the Row: after the inner loop.
Key Difference:
In the previous pattern, toggle = 1was reset each row. Here, the toggle continues globally across the entire pattern.

Time & Space Complexity:
Time Complexity: O(n^2)

Space Complexity:O(n)per row. */


function starPattern8 (n){

    let flag =1;
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<= i; j++){
            row += flag;
            flag == 1 ? flag = 0 : flag =1;
        }
        console.log(row);
    }

}


// starPattern8(4);