
console.log(10 + ' years'); // The number 10 will be converted to string; output: 10 years
console.log( '5' * '5'); //we have two strings that will be converted to number; output: 25
let x = 1 - "a";
console.log(x);//The string a cannot be converted to a number; output NaN - not a number


//Explicit Conversions
Number("5") // 5
String(true) // Converted from boolean value to string "true"
Boolean({}); // Check out the table it will return true 