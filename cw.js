// create a voting system that allows
// citizen to vote if their age is 18 and about.
// Display the message of your choice tonthe citizen

let votinglimit = 18;
let zama = 24;
let vote = "";
if (votinglimit >= zama) {
  vote = `you can vote zama you are ${zama}`;
} else {
   vote = `you are still small ${zama}`;
}




// HOME DELICACY

// 1. Write an if-else -if-else block that checks
// if a variable num is a positive number, a negative number,
// or zero.Print "Positive" if num is positive, "Negative"
// if num is negative, and "Zero" if num is zero.


let posNev = -5
let print = '';
if (posNev > 0){
  print = `Positive, this is ${posNev} it's a posivite number`;
} else if (posNev < 0){
  print = `Negative, this is ${posNev} it's a negative number`;
} else if (posNev === 0){
  print = `This is not Negative or Positive, just ${posNev} `;
} else {
  print = `This data type is not a number, i'm a ${typeof posNev} with the value of "${posNev}"`
}

console.log(print)


// 2. Write an if-else -if-else block that checks if a
// variable num is even or odd.If num is even, print
// "Even"; otherwise, print "Odd".

let evenOdd = 51;
let print1 = '';
if(evenOdd % 2 === 0){
  print1 = `Even, ${evenOdd} can be divided with 2 without reminder`;
}
else if(evenOdd % 2 === 1){
  print1 = `Odd, ${evenOdd} can't be divided with 2 without reminder`;
}
else {
  print1 = `Neither Odd nor Even, i'm a ${typeof evenOdd} with the value of "${evenOdd}"`;
}

console.log(print1)


// 3. Write an if-else-if-else block that checks if a
// variable age is a multiple of 5, a multiple of 3,
// or neither.Print "Multiple of 5" if age is a multiple
//  of 5, "Multiple of 3" if age is a multiple of 3, and
// "Neither" if age is neither a multiple of 5 nor a multiple of 3.

let age = 30;
let print2 = ''

if(age % 5 === 0 && age % 3 === 0){
  print2 = `Multiple of 3 and 5, because age is ${age}`;
}
else if(age % 5 === 0){
  print2 = `Multiple of 5, because age is ${age}`;
}
else if (age % 3 === 0){
  print2 = `Multiple of 3, because age is ${age}`;
}
else{
  print2 = `Neither Multiple of 3 nor Multiple of 5, because age is ${age}`;
}

console.log(print2)

// 4. Write an if-else-if-else block that checks if a given year is in the 20th,
// 21st, or 22nd century.Print "20th century" for years between 1901 and 2000,
// "21st century" for years between 2001 and 2100, and "22nd century" for years
//  between 2101 and 2200.

let currentYear = 2024
let birthYear = 2006
let print3 = ''

if (birthYear > 1900 && birthYear <= 2000) {
  print3 = `Your birth year is ${birthYear}, you are ${currentYear - birthYear} years old, you are From the 20th century,`
}
else if (birthYear > 2000 && birthYear <= 2100) {
  print3 = `Your birth year is ${birthYear}, you are ${currentYear - birthYear} years old, you are From the 21th century,`
}
else if (birthYear > 2100 && birthYear <= 2200) {
  print3 = `You birth year is ${birthYear}, you are ${currentYear - birthYear} years old, you are From the 22th century,`
}
else  {
  print3 = `Your birth year is ${birthYear} we don't need you here`
}

console.log(print3)


//Write an if-else-if-else block that determines the value of a
// variable result based on the value of another variable value.If value
// is less than 10, set result to 0; if value is between 10 and 50(inclusive),
//  set result to 1; if value is between 51 and 100(inclusive), set result to 2;
// otherwise, set result to 3. 

let variableValue = 508;
let result;

if(variableValue < 10){
  result = `The result is 0, as long as ${variableValue} is below 10`;
}
else if(variableValue > 10 && variableValue <= 50 ){
  result = `The result is 1, as long as ${variableValue} falls between 11 - 50`;
}
else if(variableValue > 50 && variableValue <= 100 ){
  result = `The result is 2, as long as ${variableValue} falls between 51 - 100`;
}
else{
  result = `The result is 3, as long as ${variableValue} is above 100`;
}

console.log(result)

// .................. MR WALE DELICACIES ....................

// 1. Finds the largest of three number.
// If num1 is larger, print num1 is the largest number.
// If num2 is larger, print num1 is the largest number.
// If num3 is larger, print num1 is the largest number.

let numb1 = 30;
let numb2 = 20;
let numb3 = 35;
let largest;

if (
  typeof numb1 !== "number" ||
  typeof numb2 !== "number" ||
  typeof numb3 !== "number"
) {
  largest = "Enter only number! this is age for crying out loud";
} else if (numb1 > numb2 && numb1 > numb3) {
  largest = `numb1 is the largest, i'm ${numb1} numb2 is ${numb2} and numb3 is ${numb3}`;
} else if (numb2 > numb1 && numb2 > numb3) {
  largest = `numb2 is the largest, i'm ${numb2} numb1 is ${numb1} and numb3 is ${numb3}`;
} else if (numb3 > numb1 && numb3 > numb2) {
  largest = `numb3 is the largest, i'm ${numb3} numb2 is ${numb2} and numb1 is ${numb1}`;
} else if (numb2 === numb1 || numb2 === numb3 || numb1 === numb3) {
  if (numb2 > numb3 || numb1 > numb3) {
    largest = `we are the largest numb3 is just ${numb3} even though numb2 and numb1 are the same, numb2 is ${numb2} and numb1 is ${numb1}`;
  } else if (numb1 > numb2 || numb3 > numb2) {
    largest = `we are the largest numb2 is just ${numb2} even though numb1 and numb3 are the same, numb1 is ${numb1} and numb3 is ${numb3}`;
  } else if (numb3 > numb1 || numb2 > numb1) {
    largest = `we are the largest numb1 is just ${numb1} even though numb3 and numb2 are the same, numb3 is ${numb3} and numb2 is ${numb2}`;
  } else {
    largest = `Oooops, we are the equal`;
  }
} else {
  largest = `invalid input! get lost!!`;
}

console.log(largest);


// 2.  Write an if-else block that checks if a variable isWeekend is true. 
// If it is, check if a variable isHoliday is true and print "Weekend holiday" 
//  or "Regular weekend" if it isn't. If isWeekend isn't true, 
// check if isHoliday is true and print "Weekday holiday" if it is, or "Regular weekday" if it isn't.


let isWeekend = true;
let isHoliday = false;
let isWeekday = false;
let print4;

if(isWeekend){
  if(isHoliday){
    print4 = `Weekend Holiday`;
  }
  else{
    print4 = `Regular Weekend`;
  }
}
else if(isHoliday){
  print4 = `Weekday Holiday`;
}
else {
  print4 = `Regular W eekday`;
}

console.log(print4)

// 3. In an organization , bonus to be shared for staff who have spent at 
// least 10 years with the company to get 5% on their salary. Write an if-else 
// to calculate if a staff is or isnt entiled to the bonus and how much.


let yearsSpent = 22;
let salary = 400;
let entitlement;

if (yearsSpent >= 10) {
  entitlement = `Congratulation, you've qualified for the bonus of $${salary * (5 / 100)} on your salary, altogether $${salary + (salary * (5 /100))}, because you have been working here with us for ${yearsSpent} years`;
} else if (yearsSpent < 10 && yearsSpent >= 0 && typeof yearsSpent === "number") {
  entitlement = `Oooops! you have been working here for just ${yearsSpent} years, you need ${
    10 - yearsSpent
  } more years to be qualified for a bonus`;
} else {
  entitlement = `invalid input..., get out!`;
}

console.log(entitlement);


// 4. Write a statement that allows a shop to give a discount of 10% if the 
// cost of purchased quantity is more than 1000. Output the total cost for the user.

let purchased = 5400;
let totalCost;

if (purchased > 1000 && typeof purchased === "number") {
  totalCost = `What you purchased initail is $${purchased} but you will be getting a discount of 10%, so your total cost is $${
    purchased - purchased * (10 / 100)
  }`;
} else if (
  purchased <= 1000 &&
  purchased > 0 &&
  typeof purchased === "number"
) {
  totalCost = `What you purchased initail is $${purchased}. scale up your purchase with $${1001 - purchased} and above so you can get a 10% discount`;
}
else{
  totalCost = `invalid input... get lost!`;
}

console.log(totalCost);


// 5. Finds the type of the triangle for given side values.
// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.

let side1 = 50;
let side2 = 50;
let side3 = 50;
let triangle;
if(side1 === side2 && side2 === side3 && side1 === side3){
  triangle = `Equilateral Triangle`;
}
else if (side1 === side2 || side2 === side3 || side3 === side1){
  triangle = `Isosceles Triangle`;
}
else {
  triangle = `Scalene Triangle`;
}

console.log(triangle);


// 6. Write JavaScript code to take a number and check whether it is a Buzz number or not.
//  A number is a buzz number when it ends with 7 or is divisible by 7

let buzzNumber = 77;
let checkBuzz;

if(buzzNumber % 10 === 7 || buzzNumber % 7 === 0){
  checkBuzz = `it's a Buzz Number, because the input is ${buzzNumber}`
}
else{
  checkBuzz = `it's not a buzz Number, because the input is ${buzzNumber}`
}

console.log(checkBuzz);