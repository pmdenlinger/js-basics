//Map method in JavaScript
const numbers = [ -2, 1, 2, 3, 4, 5, 6];
const numbersMap = numbers.map(addTwo)

function addTwo(num) {

    return num + 2;

}

// Arrow function syntax 
// map((element) => { ... })
// map((element, index) => { ... })
// map((element, index, array) => { ... })

//example
const numbersArray = [1, 3, 6, 9, 12, 15];
// pass a function to map
const numbersArrayMap = numbersArray.map((element) => element * 3);
console.log(numbersArrayMap);
// expected output: Array [3, 9, 18, 27, 36, 45]
