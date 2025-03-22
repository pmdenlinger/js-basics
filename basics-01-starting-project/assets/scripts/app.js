const defaultResult = 0;
let currentResult = 0;

function add(num1, num2) {
  return currentResult = num1 + num2;
}

currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
