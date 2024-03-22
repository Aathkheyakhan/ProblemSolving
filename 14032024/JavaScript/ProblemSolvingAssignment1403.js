// 1.Write a javascript program to reverse the user entered number

// let num = Number(prompt("Enter a Number"));
// let reverseNumber = 0;

// while (num > 0) {
//   reverseNumber = reverseNumber * 10 + (num % 10);
//   num = Math.trunc(num / 10);
// }
// console.log(reverseNumber);

//2.Write a javascript program to find the user entered number is strong number or not
// Eg:- 145 → 1! + 4! + 5! = 1 + (4*3*2*1) + (5*4*3*2*1) = 1+24+120 = 145

// let num = Number(prompt("Enter a number"));
// let input = num;
// let output = 0;

// while (num > 0) {
//   let rem = num % 10;
//   let factorial = 1;

//   for (let i = 1; i <= rem; i++) {
//     factorial *= i;
//   }
//   output += factorial;
//   num = Math.floor(num / 10);
// }
// if (output === input) {
//   console.log("strong number");
// } else {
//   console.log("not a strong number");
// }

// 3.Write a javascript program to find the given user number is neon number or not
// Eg:- 9 → 92 → 81 → 8+1 → 9

// let num = Number(prompt("Enter a number"));
// let square = num * num;
// let output = 0;
// for (let i = square; i > 0; i = Math.trunc(i / 10)) {
//   output += i % 10;
// }

// if (output === num) {
//   console.log("neon number");
// } else {
//   console.log("not a neon number");
// }
