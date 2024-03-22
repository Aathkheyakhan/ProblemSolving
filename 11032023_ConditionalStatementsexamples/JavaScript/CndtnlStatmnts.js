// WAJP to check weather temp//
// let temperature = Number(prompt("Enter the Temperature Outside"));

//  if (temperature <= 20) {
// console.log("Cold Weather");
//  } else if (temperature >= 21 && temperature <= 30) {
//console.log("Moderate Weather");
//  } else if (temperature >= 31 && temperature <= 40) {
//  console.log("Hot Weather");
//  } else {
// console.log("Vert Hot Weather");
// }

// using Switch //
// let temperature = Number(prompt("Enter the Temperature Outside"));
//switch (true) {
//case temperature <= 20:
//console.log("Cold Weather");
//break;
//case temperature >= 21 && temperature <= 30:
//console.log("Moderate Weather");
// break;
// case temperature >= 31 && temperature <= 40:
//console.log("Hot Weather");
//break;
//default:
//console.log("Very Hot Weather");
//}

// using ternery //
// let temperature = Number(prompt("Enter the Temperature Outside"));
//temperature <= 20
//? console.log("Cold Weather")
// : temperature >= 21 && temperature <= 30
// ? console.log("Moderate Weather")
//: temperature >= 31 && temperature <= 40
//? console.log("Hot Weather");

// WAJP to print largest between three numbers

//let a = Number(prompt("enter a"));
//let b = Number(prompt("enter b"));
//let c = Number(prompt("enter c"));

//if (a > b && a > c) {
//console.log("a is greater");
//} else if (b > a && b > c) {
// console.log("b is greater");
//} else {
//console.log("c is greater");
//}

// Using ternery
//let a = Number(prompt("enter a"));
//let b = Number(prompt("enter b"));
//let c = Number(prompt("enter c"));
//a > b && a > c
// ? console.log("a is greater")
//: b > a && b > c
// ? console.log("b is greater")
// : console.log("c is greater");

// using switch
//let a = Number(prompt("enter a"));
//let b = Number(prompt("enter b"));
//let c = Number(prompt("enter c"));
//switch (true) {
// case a > b && a > c:
//console.log("a is greater");
// break;
//case b > a && b > c:
//console.log("b is greater");
//break;
//default:
// console.log("c is greater");
//}

// WAJP to check the number is positive or negative or zero

//let num = Number(prompt("Enter a number"));

//if (num > 0) {
//console.log("The number is positive");
//} else if (num == 0) {
//console.log("The number is 0");
//} else {
// console.log("The number is negative");
//}

// using ternery
//let num = Number(prompt("Enter a number"));
//num > 0
// ? console.log("The number is positive")
// : num == 0
// ? console.log("The number is 0")
// : console.log("The number is negative");

// using switch
//let num = Number(prompt("Enter a number"));
//switch (true) {
//case num > 0:
// console.log("The number is positive");
// break;
//case num == 0:
// console.log("The number is 0");
// break;
//default:
//console.log("The number is negative");
//}

// WAJP calculates the body mass index (BMI) of a person

//let weight = Number(prompt("Enter a Nummber")); // kg
//let height = Number(prompt("Enter a Number")); // meter

//let bmi = weight / (height * height);
//if (bmi < 18.5) {
// console.log("Underweight");
//} else if (bmi >= 18.5 && bmi <= 24.9) {
//console.log("Healthy Weight");
//} else if (bmi >= 25 && bmi <= 29.9) {
// console.log("Overweight");
//} else {
//console.log("Obesity");
//}

// using ternery

//let weight = Number(prompt("Enter a Nummber"));
//let height = Number(prompt("Enter a Number"));
//let bmi = weight / (height * height);
//bmi < 18.5
//  ? console.log("underweight")
//  : bmi >= 18.5 && bmi <= 24.9
// ? console.log("Healthy Weight")
// : bmi >= 25 && bmi <= 29.9
// ? console.log("Overweight")
// : console.log("Obesity");

// using switch

//let weight = Number(prompt("Enter a Nummber"));
//let height = Number(prompt("Enter a Number"));
//let bmi = weight / (height * height);
//switch (true) {
// case bmi < 18.5:
//console.log("Underweight");
// break;
//case bmi >= 18.5 && bmi <= 24.9:
// console.log("Healthy Weight");
//  break;
// case bmi >= 25 && bmi <= 29.9:
//  console.log("Overweight");
//  break;
// default:
//  console.log("Obesity");
//}

// WAJP finding day of week

//let num = Number(prompt("Enter the number between 1 and 7"));

//if (num == "1") {
// console.log("Today is Monday!");
//} else if (num == "2") {
// console.log("Today is Tuesday!");
//} else if (num == "3") {
// console.log("Today is Wednesday!");
//} else if (num == "4") {
//console.log("Today is Thursday!");
//} else if (num == "5") {
// console.log("Today is Friday!");
//} else if (num == "6") {
//  console.log("Today is Saturday!");
//} else if (num == "7") {
// console.log("Today is Sunday!");
//} else {
// console.log("Not a weekday!");
//}

// using ternery //

//let num = Number(prompt("Enter the number between 1 and 7"));
//num == 1
//  ? console.log("Today is Monday")
// : num == 2
// ? console.log("Today is Tuesday")
// : num == 3
//  ? console.log("Today is wednesday")
//  : num == 4
//  ? console.log("Today is Thursday")
// : num == 5
// ? console.log("Today is Friday")
//  : num == 6
// ? console.log("Today is Saturday")
// : num == 7
// ? console.log("Today is Sunday")
// : console.log("Not a weekday");

// using switch
//let num = Number(prompt("Enter the number between 1 and 7"));
//switch (true) {
// case num === 1:
// console.log("Today is Monday");
//  break;
// case num === 2:
//   console.log("Today is Tuesday");
//   break;
// case num === 3:
//   console.log("Today is wednesday");
//   break;
// case num === 4:
//   console.log("Today is Thursday");
//  break;
//case num === 5:
//  console.log("Today is Friday");
//  break;
//case num === 6:
//  console.log("Today is Friday");
//   break;
// case num === 7:
//   console.log("Today is Sunday");
// default:
//  console.log("Not a weekday");
//}
