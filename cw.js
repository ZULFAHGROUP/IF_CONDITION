// let firstName1 = "Yusuf";
// let firstName2 = "Zainab";
// let firstName3 = "Sherifat";
// let firstName4 = "Kabeerat";
// let firstName5 = "Ibrahim";
// let firstName6 = "Oluwatobilola";
// let firstName7 = "Olawale";
// let firstName8 = "Afeez";
// let firstName9 = "Sulton";
// let firstName10 = "Firdaus";
// let lastName1 = "Tajudeen";
// let lastName2 = "Orowojobe";
// let lastName3 = "Oshoola";
// let lastName4 = "Azeez";
// let lastName5 = "Philip";
// let lastName6 = "Akinyemi";
// let lastName7 = "Demeji";
// let lastName8 = "Sulaimon";
// let lastName9 = "Efilarin";
// let lastName10 = "Okoya";

// console.log(firstName1.charAt(0) + " " + lastName1.charAt(0));
// console.log(firstName2.charAt(0) + " " + lastName2.charAt(0));
// console.log(firstName3.charAt(0) + " " + lastName3.charAt(0));
// console.log(firstName4.charAt(0) + " " + lastName4.charAt(0));
// console.log(firstName5.charAt(0) + " " + lastName5.charAt(0));
// console.log(firstName6.charAt(0) + " " + lastName6.charAt(0));
// console.log(firstName7.charAt(0) + " " + lastName7.charAt(0));
// console.log(firstName8.charAt(0) + " " + lastName8.charAt(0));
// console.log(firstName9.charAt(0) + " " + lastName9.charAt(0));
// console.log(firstName10.charAt(0) + " " + lastName10.charAt(0));

// console.log(firstName1.charAt(0).concat(" ", lastName1.charAt(0)));
// console.log(firstName2.charAt(0).concat(" ", lastName2.charAt(0)));
// console.log(firstName3.charAt(0).concat(" ", lastName3.charAt(0)));
// console.log(firstName4.charAt(0).concat(" ", lastName4.charAt(0)));
// console.log(firstName5.charAt(0).concat(" ", lastName5.charAt(0)));
// console.log(firstName6.charAt(0).concat(" ", lastName6.charAt(0)));
// console.log(firstName7.charAt(0).concat(" ", lastName7.charAt(0)));
// console.log(firstName8.charAt(0).concat(" ", lastName8.charAt(0)));
// console.log(firstName9.charAt(0).concat(" ", lastName9.charAt(0)));
// console.log(firstName10.charAt(0).concat(" ", lastName10.charAt(0)));

// Home Work

// let surname = "Tajudeen";
// let firstname =  "Yusuf";
// let othername = 'Ajibola';
// let firstCharOfSurname = surname.charAt(0);
// let firstCharOfFirstname = firstname.charAt(0);

// let concats = firstCharOfSurname.concat(".",firstCharOfFirstname, " ", othername);

// console.log(concats);

// let str = "Hello, world! how are you?";
// let occ1 = str.indexOf('o');
// console.log("First O index: ", occ1);

//  let occ2 = str.indexOf('o', occ1 + 1);

// console.log("Second O index: ", occ2);

// let str1 = "Zama";
// let str2 = "is a baby girl";
// let result = str1.concat(" ", str2)
// // console.log(result);
// let str3 = `her tech name is ${str1}, her wahala is too much`;

// result += ", " + str3;
// console.log(result);

// let lastIndexOfThisString = "The brown dog followed the black dog, while the white dog barked at the stray dog chasing the small dog";
// console.log("The last index Character: ", lastIndexOfThisString.charAt(lastIndexOfThisString.length - 1));
// let lastIndex = lastIndexOfThisString.lastIndexOf('dog');
// console.log("The last index of Dog: " + lastIndex);

// let thirdToTheLast = lastIndexOfThisString.indexOf('dog', 34)
// // console.log("The third to the last index of Dog: ", thirdToTheLast);

// let secondToTheLast = lastIndexOfThisString.lastIndexOf('dog', lastIndex - 1)
// // console.log("The second to the last index of Dog: ", secondToTheLast);

// let thirdToTheLastIndex = lastIndexOfThisString.lastIndexOf('dog', secondToTheLast - 1)
// console.log("The third to the last index of Dog: ", thirdToTheLastIndex);

// let theDog = "The brown dog followed the black dog";
// let cat = "k cat"
// let cat1 = theDog.substring(theDog.length - 5)
// let newResult = theDog.replace(cat1, cat)
// console.log(newResult);
// //
// let cat2 = theDog.lastIndexOf("dog");
// let cat3 = theDog.slice(cat2);
// console.log(cat3)
// let newResult1 = theDog.replace(cat3, "cat");
// console.log(newResult1);
// //
// let lastIndex = theDog.lastIndexOf("dog");
// let cutFrist = theDog.slice(0, lastIndex);
// console.log(cutFrist)

// let newResult2 = cutFrist + "cat"+ theDog.slice(lastIndex + "dog".length)
// console.log(newResult2);

// // FRIDAY HOME WORK DELICACIES

// // 1. Write code that trims a string "  The morning is upon us  "
// //  and then extract the third to eleventh characters of the trimmed string.
// let originalString = "  The morning is upon us  ";
// let trimmedAndSLice = originalString.trim().slice(3, 11).trim();
// console.log(trimmedAndSLice)

// // OR
// let trimmedString = originalString.trim();
// let extractedCharacters = trimmedString.substring(2, 11);
// console.log(extractedCharacters);

// // 2. Given a string "The quick brown fox jumps over the lazy dog", extract from the original string
// //  to create a new string "jumps over the lazy dog, The quick brown fox".
// let givenString = 'The quick brown fox jumps over the lazy dog';
// let extract = givenString.indexOf('jumps')
// let extractedString  = givenString.substring(extract) + ", " + givenString.substring(0, extract).trim();
// console.log(extractedString)

// //  OR

// // Split and Join is an Array method
// let wordsArray = givenString.split(" ");
// let lastFiveWords = wordsArray.slice(-5).join(" ");
// let restOfString = givenString.substring(0, givenString.length - lastFiveWords.length).trim();
// let newString = lastFiveWords + ", " + restOfString;
// console.log(newString);

// // 3. Write code that trims the end of a string "  The brown fox "
// // and then check if the trimmed string includes a specific "o".

// let trimedEndString = "  The brown fox ";
// let trimmedStringIncl = trimedEndString.trimEnd().includes("o")
// console.log(trimmedStringIncl)

// // OR

// let trimmedString1 = trimedEndString.trim();
// let includesO = trimmedString1.includes("o");
// console.log(includesO);

// // 4. Given a string "abcdefg", extract every character and create a new string "aceg".
// let aString = "abcdefg";
// let extractChar = aString.charAt(0) + aString.charAt(2) + aString.charAt(4) + aString.charAt(6);
//   console.log(extractChar)

// //   OR

// let newString1 = "";
// for (let i = 0; i < aString.length; i += 2) {
//     newString1 += aString[i];
// }
// console.log(newString1);

// // 5. Given a string "example example example",
// // extract the second occurrence of "example" then create a new string "lamp.

// let strExample = "example example example";
// let example = "example";
// let secondOccurence = strExample.indexOf(example, strExample.indexOf(example) + 1);
// let first = strExample.slice(0, secondOccurence);
// let second = strExample.slice(secondOccurence);
// let replaceLamp = second.replace("example", "lamp");
// let createNewString = first + replaceLamp;
// console.log(createNewString);

// // OR

// let includesSecondOccurence = strExample.includes(second)
// if (second) {
//   let newString = strExample.substring(0, secondOccurence) + "lamp " + first.trim() ;
//   console.log(newString);
// } else {
//   console.log("Second occurrence not found.");
// }

// // 5. Given a string "example example example",
// // extract the second occurrence of "example" then create a new string "lamp.

// let extraction = strExample.substring(
//   secondOccurence,
//   strExample.lastIndexOf(example)
// );
// let concatExtraction = extraction
//   .charAt(extraction.length - 3)
//   .concat(
//     extraction.slice(2,5)
//   );
//   console.log(concatExtraction);
// // 6. Given a string "  Hello, World!  ", trim the string and find the last index of the string.

// let givenAString = "  Hello, World!  ";
// let trimHello = givenAString.trim();
// let lastIndexOfTrimmed = trimHello.charAt(trimHello.length - 1)
// console.log(lastIndexOfTrimmed);

// // OR

// let trimmedString2 = givenAString.trim();
// let lastIndex = trimmedString2.lastIndexOf(lastIndexOfTrimmed);
// console.log(lastIndex);

// // 7. Given a string "Hello, World!", find the index of the string "World",
// //  use the result of the index to extract the substring "World".
// let findIndexofWorld = trimHello.indexOf("World");
// let extractSubstring = trimHello.substring(findIndexofWorld, trimHello.length -1)
// console.log(extractSubstring)

// // OR

// let searchString = "World";
// let index = trimmedString2.indexOf(searchString);
// let includesString = trimmedString2.includes(searchString);
// if (includesString) {
//   let extractedSubstring = trimmedString2.substring(
//     index,
//     index + searchString.length
//   );
//   console.log(extractedSubstring);
// } else {
//   console.log("Substring not found");
// }

// // 8. Given a string s consisting of words and spaces,
// //  return the length of the last word in the string.

// let techExperince = ' Studying Software Engineer is like true love..., You suffer, fail, learn, fail again, fight bugs and but you never want to let go because of the love you have for it and the pay-check  ';
// let lastIndexOfString = techExperince.trim().lastIndexOf(" ");
// let lengthOfTheLast = techExperince.trim().slice(lastIndexOfString).length

// console.log(lengthOfTheLast);

// // OR

// let wordArray = techExperince.trim().split(" ");
// let lengthOfLastWord = wordArray[wordArray.length - 1].length;
// console.log(lengthOfLastWord);

// // OR

// let lastWordSlice = wordArray.slice(-1).join().length;
// console.log(lastWordSlice);

// // 9. Write a program that encodes a string to a coded (h4ck3r 5p34k) version of the string.
// // And remove spaces at beginning and end of string
// // In order to work properly, the program should replace all
// //  'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// let alimOnceSaid = "The day i'd be serious with all i've been saying to you remember i've been joking around.";
// let zamaOnceSaid = "The day i'd vex just remember i've been lol-ing";
// let encodeString = alimOnceSaid.replaceAll('a', 4).replaceAll("e", 3).replaceAll('i', 1).replaceAll('o',0).replaceAll('s', 5)
// let encodeString2 = zamaOnceSaid.replaceAll('a', 4).replaceAll("e", 3).replaceAll('i', 1).replaceAll('o',0).replaceAll('s', 5)

// console.log(encodeString)
// console.log(encodeString2)

// //  OR

// function encodeToHackerSpeak(text) {
//   text = text.trim();
//   text = text.replace(/a/g, "4");
//   text = text.replace(/e/g, "3");
//   text = text.replace(/i/g, "1");
//   text = text.replace(/o/g, "0");
//   text = text.replace(/s/g, "5");
//   return text;
// }

// console.log(encodeToHackerSpeak(alimOnceSaid));
// console.log(encodeToHackerSpeak(zamaOnceSaid));

// // class work
// // s
// let mrWale = "javasrcipt";
// let exchange = ' pyton'
// let makeIt3 = mrWale.concat(" ").repeat(3);
// console.log(makeIt3)
// let lastOccur = makeIt3.lastIndexOf(mrWale)
// let pick2 = makeIt3.slice(mrWale.length, lastOccur).trimEnd();
// console.log(pick2)
// let changeIt = makeIt3.replace(pick2, exchange);
// console.log(changeIt)

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

// console.log(zama)

// let votingAges = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// let Sherifat = 27

// if (votingAges >= votinglimit) {
//   votingAges.map();
//   console.log(`you can vote zama you are ${Sherifat}`);
// } else if (votingAges< votinglimit) {
//   votingAges.map();
//   console.log("you can't vote, you are a kid");
// }


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