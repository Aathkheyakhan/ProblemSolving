// 1. Write the Javascript program to find nth prime number
// Eg:- 1st —> 2
//      2nd → 3
//      3rd  → 5
//      4th → 7
//      5th → 11
// let n = Number(prompt("enter a number"));
// let count = 0;
// let num = 2;

// while (true) {
//   let isPrime = true;
//   for (let i = 2; i <= num - 1; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     count++;
//     if (count === n) {
//       console.log(num);
//       break;
//     }
//   }
//   num++;
// }

// 2.Write a javascript program to find sum of each digit until you get a single digit
// Eg:-  363 → 3+6+3 → 12 → 1+2 → 3

// let num = Number(prompt("enter a number"));
// let sum = num;
// while (num >= 10) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.trunc(num / 10);
//   }
//   num = sum;
// }
// console.log(num);

//3. Write a javascript program to find given number is magic number or not.
// Eg:- 363 → 3+6+3 → 12 → 1+2 →3 is not equal to 1 so not magic number
// 1234 → 1+2+3+4 → 10 → 1+0 → 1 is equal to 1 so magic number.

// let num = Number(prompt("enter a number"));
// let output = 0;
// while (num >= 10) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   num = sum;
// }
// if (num === 1) {
//   console.log("magic number");
// } else {
//   console.log("not a magic number");
// }

// 4.Write a javascript program to find the given number is happy number or not.
// Eg:- 97 → 92 + 72 → 81 + 49 → 130 → 12 + 32 + 02 → 1+9+0 → 10 → 12 + 02  ==1  the output should be 1 or 7.

// let num = Number(prompt("enter a number"));
// let output = 0;
// while (true) {
//   let sumOfSquares = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sumOfSquares += digit * digit;
//     num = Math.trunc(num / 10);
//   }
//   if (sumOfSquares === 1) {
//     console.log("happy number");
//     break;
//   } else if (sumOfSquares !== 1) {
//     console.log("not a happy number");
//     break;
//   }
//   num = sumOfSquares;
// }

// 5.Write a javascript program to find the nearest prime for user defined number
// Eg:- input : 4 —> 5 , 6 —>7, 8—>7 ,10→11

// let number = Number(prompt("enter a number"));
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(number); i++) {
//   if (number % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log(number);
// } else {
//   let lowerPrime = number - 1;
//   let upperPrime = number + 1;
//   while (true) {
//     let isLowerPrime = true;
//     for (let i = 2; i <= Math.sqrt(lowerPrime); i++) {
//       if (lowerPrime % i === 0) {
//         isLowerPrime = false;
//         break;
//       }
//     }
//     if (isLowerPrime) {
//       console.log(lowerPrime);
//       break;
//     }
//     lowerPrime--;

//     let isUpperPrime = true;
//     for (let i = 2; i <= Math.sqrt(upperPrime); i++) {
//       if (upperPrime % i === 0) {
//         isUpperPrime = false;
//         break;
//       }
//     }
//     if (isUpperPrime) {
//       console.log(upperPrime);
//       break;
//     }
//     upperPrime++;
//   }
// }
