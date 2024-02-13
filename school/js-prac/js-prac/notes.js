// 3 ways to initialize variables
// 'let' : for mutable variables (camelCase)
// 'const' : for immutable variables (ALL_CAPS)
// 'var' : obsolete for older browsers, has many vulnerabilities

// FIXME: Aside from modernity, what are other differences between 'let' and 'var'? 
// FIXME: How did using 'let' fix or avoid the vulnerabilities concerning 'var'?

// Auto-detection of data type. No need to declare data type. 
// (String, Number, Boolean, Object, Array, Date, null, undefined)
// Date: YYYY-MM-DD

// == : loose equality : same value diff data type
// === : strict equality : same value same data type

// JAVASCRIPT EXERCISE 1 

// GRADE CHECKER
// Create a program that checks a student's grade based on their exam score. 
// Use if-else statements to determine the grade. The grading scale is as follows:
// A : 90-100
// B : 80-89
// C : 70-79
// D : 60-69
// E : Below 60

// const grade = prompt("Enter your grade:");
// let remark;

// if (grade > 90 && grade < 100) {
//     remark = 'A';
// } else if (grade > 80 && grade < 90) {
//     remark = 'B';
// } else if (grade > 70 && grade < 79) {
//     remark = 'C';
// } else if (grade > 60 && grade < 69) {
//     remark = 'D';
// } else if (grade < 60) {
//     remark = 'E';
// } else {
//     console.log("Invalid grade.");
//     remark = null;
// }

// console.log(remark);

// JAVASCRIPT EXERCISE 2

// COUNTDOWN
// Implement a countdown using a while loop.
// Start the countdown from 10 and print the values down to 1.

let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}

// SUM OF EVEN NUMBERS
// Use a for loop to calculate and print the sum of even numbers from 2 to 10.

let sumOfEvenNums = 0;
for ( let i = 1; i <= 10 ; i ++) {
    if ( i % 2 == 0 ) {
        sumOfEvenNums += i;
    }
}

console.log(sumOfEvenNums);