// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let age = 12 - 55;
if (age < 11) {
  alert("You can participate in the marathon.");
}

let personage = 4 - 11;
if (personage < 3) {
  alert("You are too young to participate in the marathon.");
}

let childAge = 2;
if (childAge < 4) {
  alert(" Hey Kiddo! Can You Walk ?");
}

let oldAge = 90;
if (oldAge > 55) {
  alert(" You are too old to participate in the marthon");
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let n = "eeee....";
let hello = prompt("hey");
alert(`h${n}llo`);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let naturalNumbers = prompt("Enter a number")

 let num = n;
 let sum = 0;
 for (i = 1; i <= n; i++) {
  if (i % 2 == 0){
    sum += i;
  }
 }
 console.log(sum);


/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let firstNum = 1;
switch (firstNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;
}

let secondNum = 2;
switch (secondNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;
}

let thirdNum = 3;
switch (thirdNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;
}

let fourthNum = 4;
switch (fourthNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;
  
    case 4: 
    alert("FOUR");
    break;
}

let fifthNum = 5;
switch (fifthNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;
  
  case 4:
    alert("FOUR");
    break;

  case 5:
    alert("FIVE");
    break;
}

let sixthNum = 6;
switch (sixthNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;

  case 4:
    alert("FOUR");
    break;

  case 5:
    alert("FIVE");
    break;

  case 6:
    alert("SIX");
    break;

  case 7:
    alert("SEVEN");
    break;

  case 8:
    alert("EIGHT");
    break;

  case 9:
    alert("NINE");
    break;
}

let seventhNum = 7;
switch (seventhNum) {
  case 1: 
  alert("ONE");
  break;

case 2:
  alert("TWO");
  break;

case 3:
  alert("THREE");
  break;

case 4:
  alert("FOUR");
  break;

case 5:
  alert("FIVE");
  break;

case 6:
  alert("SIX");
  break;

case 7:
  alert("SEVEN");
  break;

case 8:
  alert("EIGHT");
  break;

case 9:
  alert("NINE");
  break;
}

let eighthNum = 8;
switch (eighthNum) {
  case 1: 
    alert("ONE");
    break;

  case 2:
    alert("TWO");
    break;

  case 3:
    alert("THREE");
    break;

  case 4:
    alert("FOUR");
    break;

  case 5:
    alert("FIVE");
    break;

  case 6:
    alert("SIX");
    break;

  case 7:
    alert("SEVEN");
    break;

  case 8:
    alert("EIGHT");
    break;

  case 9:
    alert("NINE");
    break;
}

let ninthNum = 9;
switch (ninthNum) {
  case 1: 
  alert("ONE");
  break;

case 2:
  alert("TWO");
  break;

case 3:
  alert("THREE");
  break;

case 4:
  alert("FOUR");
  break;

case 5:
  alert("FIVE");
  break;

case 6:
  alert("SIX");
  break;

case 7:
  alert("SEVEN");
  break;

case 8:
  alert("EIGHT");
  break;

case 9:
  alert("NINE");
  break; 
}

let tenthNum = 11;
switch (tenthNum) {
  case 1: 
  alert("ONE");
  break;

case 2:
  alert("TWO");
  break;

case 3:
  alert("THREE");
  break;

case 4:
  alert("FOUR");
  break;

case 5:
  alert("FIVE");
  break;

case 6:
  alert("SIX");
  break;

case 7:
  alert("SEVEN");
  break;

case 8:
  alert("EIGHT");
  break;

case 9:
  alert("NINE");
  break;

default:
  alert("PLEASE TRY AGAIN")
}


/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = prompt("Enter Your Marks")

if (marks > 90) {
  alert("Your Grade is AA");
} else if (marks > 80 && marks <= 90) {
  alert("Your Grade is AB")
} else if (marks > 70 && marks <= 80 ) {
  alert("Your Grade is BB")
} else if (marks > 60 && marks <= 70 ) {
  alert("Your Grade is BC")
} else if (marks > 50 && marks <= 60 ) {
  alert("Your Grade is CC")
} else if (marks > 40 && marks <= 50 ) {
  alert("Your Grade is CD")
} else if (marks > 30 && marks <= 40 ) {
  alert("Your Grade is DD")
} else if (marks <= 30 ) {
  alert("Your Grade is FF")
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/

let numA = prompt("Enter numA");
let numB = prompt("Enter numB");

if (numA > numB) {
  alert(`${numA} is larger`);
} else {
  alert(`${numB} is larger`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let x = prompt("Enter a integer");
let y = prompt("Enter a integer");
let z = prompt("Enter a integer");
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
}
else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +")
}
else if (x > 0 && y > 0 && z < 0) {
  console.log("The sign is +")
}
else
{
  console.log("the sign is -")
}


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
