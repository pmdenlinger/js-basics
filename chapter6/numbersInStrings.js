//Numbers in strings with minus operator
let age = '25';
let year = 2022;
let yearBorn = year - age;
console.log(yearBorn);//The result will be 1997 but the age variable has a string 25 not a number 25

//string concatenation
const message1 = 'Hello';
const message2 ='Word';
let result = message1 + ' ' + message2;
console.log(result);

//Numbers in strings with plus operator
let age = '25';
let year = 2022;
let yearBorn = year + age;
console.log(yearBorn);//Output: 1997


//convert string to a number using Number function
let age = '25';
let convertAge = Number(age);
let year = 2022;
let yearBorn = year - convertAge;
console.log(yearBorn);//The result is 1997

//convert string to a number using parseFloat
let number1 = '3.3';
let number1Converetd = parseFloat(number1);
console.log(number1Converetd);

//convert string to a number using parseInt
let number2 = '3.3';
let number2Converetd = parseInt(number2);
console.log(number2Converetd);

//convert a number to a string
let stringNumber = 3;
let stringNumberConverted = stringNumber.toString();
