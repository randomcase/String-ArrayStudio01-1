const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//let newstr = str.slice(0,3)
//let newstr2 = str.slice(3, str.length)
//console.log(`${newstr2}${newstr}`);
//Use a template literal to print the original and modified string in a descriptive phrase.
//let myNewString = `Cute: ${newstr2}${newstr}`
//console.log(myNewString)

let indexStart = input.question("How many characters to change? ")
//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

indexStart = Number(indexStart);

let newstr = str.slice(0, indexStart)
let newstr2 = str.slice(indexStart, str.length)

let myNewString = `Cute: ${newstr2}${newstr}`
console.log(myNewString)
//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (indexStart > str.length) {
  indexStart = 3;
}