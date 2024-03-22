//Write a javascript program to count how many digits are present in user entered number
//Eg:- 245→ 3 digits

//let num = Number(prompt("Enter a number"));
//let output = 0;
//while (num > 0) {
// num = Math.floor(num / 10);
// output++;
//}
//console.log(output);

//Write a javascript program to print the sum of each digit present in number
//Eg:- 245→2+4+5= 11

//let num = Number(prompt("Enter a number"));
//let output = 0;
//while (num > 0) {
// let rem = num % 10;
// output = output + rem;
//num = Math.floor(num / 10);
//}
//console.log(output);

// Write a javascript program to print the product of each digit present in user entered number
//Eg:- 123 → 1*2*3 → 6

//let num = Number(prompt("Enter a number"));
//let output = 1;
//while (num > 0) {
// let rem = num % 10;
// output = output * rem;
// num = Math.floor(num / 10);
//}
//console.log(output);

//Write a javascript program to print all the factors for user entered number
//Eg:- 6 → 3,2,1

//let num = Number(prompt("Enter a number"));
//for (i = 1; i < num; i++) {
// if (num % i === 0) {
//  console.log(i);
//}
//}

//1.Write a javascript program to define a method to check the number is prime number or not

//let num = Number(prompt("Enter a number"));
//let isPrime = true;

//if (num <= 1) {
//  isPrime = false;
//} else {
// for (let i = 2; i <= num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
//}

//if (isPrime) {
// console.log("Prime number");
//} else {
// console.log("Not a prime number");
//}

//2.Write a javascript program to print prime numbers present between 1 to 10
//let num1 = Number(prompt("Enter a number"));
//let num2 = Number(prompt("Enter a number"));

//for (let i = num1; i <= num2; i++) {
// let isPrime = true;
// for (let j = 2; j < i; j++) {
//   if (i % j === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime == true) {
// console.log(i);
//  }
//}

//3.Write a javascript program to count how many prime numbers are present between 1 to 5

// let num1 = Number(prompt("Enter a number"));
// let num2 = Number(prompt("Enter a number"));
// let count = 0;

// for (let i = num1; i <= num2; i++) {
//   let isPrime = true;
//   if (i < 2) {
//     isPrime = false;
//   }
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     count++;
//   }
// }
// console.log(count);

//4.Write a Javascript program to find the factorial of user defined number
//Eg:- 5 → 5*4*3*2*1 = 120

// let num = Number(prompt("Enter a positive integer"));
// if (num < 0) {
//   console.log("there is no factorial for negative number");
// } else if (num === 0) {
//   console.log("The factorial of num is 1");
// } else {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   console.log(factorial);
// }

//5.Write a javascript program to print np  both we need to take input from user
//Eg:- 23 = 2*2*2 =8

// let num1 = Number(prompt("Enter the base"));
// let num2 = Number(prompt("Enter the exponent"));
// let result = 1;

// for (let i = 1; i <= num2; i++) {
//   result *= num1;
// }
// console.log(result);
