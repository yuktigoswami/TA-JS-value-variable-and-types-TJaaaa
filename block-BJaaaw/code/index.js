// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = 8
let remainder = (number % 2)
if (remainder == 0)
{
  console.log(`${number} is even`)
}else{
  console.log(`${number} is odd`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let A = Number(prompt("Enter first number"));
let B = Number(prompt("Enter second number"));
if (A > B){
  alert(`${A} is maximum`);
}else{(B > A) 
  alert(`${B} is maximum`);
}

// 3. Convert the above code using`?` terniary operator

A > B ?
alert(`${A} is maximum`) : alert(`${B} is maximum`);


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message "Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter a house name from Got");
if(houseName ==="stark"){
  alert("Winter is coming");
}else if(houseName === "lannister"){
  alert("A lannister always pays his debt");
}else{
  alert("All men must die")
}

// 5. Convert the above code using`?` terniary operator
houseName === "stark" ? alert("winter is coming") : houseName === "lannister" ? alert("A lannister always pays his debt"):alert("All men must die")

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt('Enter the name of month');

switch(monthName){
  case "January":
    alert("The number of days are 31");
  case "February":
    alert("The number of days are 28");
  case "March":
    alert("The number of days are 31");
  case "April":
    alert("The number of days are 30");
  case "May":
    alert("The number of days are 31");
  case "June":
    alert("The number of days are 30");  
  case "July":
    alert("The number of days are 31");
  case "August":
    alert("The number of days are 31");
  case "September":
    alert("The number of days are 30");
  case "October":
    alert("The number of days are 31");
  case "November":
    alert("The number of days are 30");
  case "December":
    alert("The number of days are 31");
  default:
    alert("Not a valid input!")  
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let amount = Number(prompt("Enter your salery"));

switch (true) {
  case salery <= 20000:{
    let taxedAmount = (salery * 10) / 100;
    alert(`Your in-hand amount ${salery - taxedAmount}`);
    break;
  }
    case salery <= 40000:{
    let taxedAmount = (salery * 20) / 100
    alert(`Your in-hand amount ${salery - taxedAmountx}`);
    break;
  }
    case salery > 50000:{
    let taxedAmount = (salery * 30) / 100;
    alert(`Your in-hand amount ${salery - taxedAmount}`);
    break;
  }
  default:
    alert("Not a valid input!")  
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
  
*/
let marks = Number(prompt("Enter your marks"));

if (marks > 100) {
  alert("Marks can't be greater than 100")
}else if(marks > 80 && marks < 100){
  alert("Grade A");
}else if(marks > 50 && marks < 80){
  alert("Grade B");
}else if(marks > 30 && marks < 50){
  alert("Grade C");
}else {
  alert("Grade D");
}

switch(true){
  case marks > 100:
    alert("Marks can't be greater than 100")
    break;
  case marks > 80 && marks < 100:
    alert("Grade A")
    break;
  case marks > 50 && marks < 80:
    alert("Grade B")
    break;
  case marks > 30 && marks < 50:
    alert("Grade C")
    break;
  default:
    alert("Grade D")
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`What is the weather like outside?`);

switch(weather) {
  case "sunny":
    alert(`Wear a T-shirt`);
    break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "hot":
    alert(`Get a hanky`);
    break;
    case "freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
}
