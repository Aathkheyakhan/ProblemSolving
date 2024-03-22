// 1.Write a javascript program to find the user defined number is Armstrong number or not.
// Eg:- 123 → length 3 → 13 + 23 + 33  → 36 not armstrong number
// 153 → length 3 → 13 + 53 + 33 → 1+125+27 → 153 armstrong number

// let num = Number(prompt("enter a number"));
// let sum = 0;
// let noOfDigits = num.toString().length;
// let temp = num;
// while (temp > 0) {
//   let rem = temp % 10;
//   sum = sum + Math.pow(rem, noOfDigits);
//   temp = Math.trunc(temp / 10);
// }
// if (sum === num) {
//   console.log("Armstrong Number");
// } else {
//   console.log("Not a Armstrong Number");
// }

// let num = Number(prompt("enter a number"));
// let temp = num;
// let numberOfDigits = 0;
// let sum = 0;
// // counting digits in a number
// while (temp > 0) {
//   temp = Math.floor(temp / 10);
//   numberOfDigits++;
// }
// // sum of each digit raised to the power of numberofdigits
// temp = num;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += Math.pow(digit, numberOfDigits);
//   temp = Math.floor(temp / 10);
// }
// if (sum === num) {
//   console.log("Armstrong Number");
// } else {
//   console.log("not armstrong number");
// }

//2.Write a javascript program to find the user defined number is disarium number or not
// Eg:- 89 → 81 + 92  → 8 + 81 → 89
// 135 → 11 + 32 + 53  → 1+9+125 → 135

// let num = Number(prompt("enter a number"));
// let sum = 0;
// let temp = num;
// let digitCount = 0;
// while (temp > 0) {
//   temp = Math.floor(temp / 10);
//   digitCount++;
// }
// temp = num;
// while (temp > 0) {
//   let digit = temp % 10;
//   sum += Math.pow(digit, digitCount);
//   temp = Math.floor(temp / 10);
//   digitCount--;
// }
// if (sum === num) {
//   console.log("is a Disarium number");
// } else {
//   console.log("is not a Disarium number");
// }

//3.Write a javascript program to find user entered number is xylem or pholem
// Eg:- 132 → add first and last number 1+2 →3 == 3(2nd number) this is xylem if it is not match then pholem
// 123 → 1+3 →4 not equal to 2 It is pholem

// let num = Number(prompt("Enter a number"));
// let temp = num;
// let sumOfEndDigits = 0;
// let sumOfMiddleDigits = 0;
// while (temp > 0) {
//   let rem = temp % 10;
//   if (temp === num || temp < 10) {
//     sumOfEndDigits = sumOfEndDigits + rem;
//   } else {
//     sumOfMiddleDigits = sumOfMiddleDigits + rem;
//   }
//   temp = Math.floor(temp / 10);
// }
// if (sumOfEndDigits === sumOfMiddleDigits) {
//   console.log("It is a xylem number");
// } else {
//   console.log("It is a phloem number");
// }

// 4.Write a javascript program to find user entered number is duck number or not.
// Eg:- A Duck number is positive number which has zeroes present in it.
// Eg:- 3210,8050896,70709 → duck number
// 035,0012 → not duck number

// let num = Number(prompt("enter a number"));
// let isDuckNumber = false;
// while (num > 0) {
//   let digit = num % 10;
//   if (digit === 0) {
//     isDuckNumber = true;
//     break;
//   }
//   num = Math.floor(num / 10);
// }
// if (isDuckNumber) {
//   console.log("duck number");
// } else {
//   console.log("not a duck number");
// }

// 5.Write a javascript program to print twin prime number from 1 10 100
// Eg:- 345 → between 2 and 3 only one number is there then it is twin prime number
// Eg:- 567 → twin prime number
// Eg:- 7891011→ not twin prime number

// let num1 = Number(prompt("enter a number"));
// let num2 = Number(prompt("enter a number"));
// // for (let num = 2; num <= 100; num++) {
// //   let isTwinPrime = false;
// for (let i = 2; i <= Math.sqrt(num1); i++) {
//   if (num1 % i === 0) {
//     isTwinPrime = false;
//     break;
//   }
//   isTwinPrime = true;
// }
// if (isTwinPrime) {
//   let nextNum = num2;
//   for (let j = 2; j <= Math.sqrt(nextNum); j++) {
//     if (nextNum % j === 0) {
//       isTwinPrime = false;
//       break;
//     }
//   }
// }
// if (isTwinPrime) {
//   console.log(num1 + " and " + num2 + " are twin prime numbers.");
// }
// // }
