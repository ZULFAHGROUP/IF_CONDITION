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