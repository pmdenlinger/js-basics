// JavaScript Array.prototype.includes()
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbersArray.includes(6));
// output: true

const myPets = ['cat', 'dog', 'snake','koala', 'kangaroo'];

console.log(myPets.includes('koala'));
//output: true

console.log(myPets.includes('ke'));
// output: false

//with fromIndex includes(element, fromIndex)
console.log(numbersArray.includes(5, 3));//this will return true
console.log(numbersArray.includes(5, 5));//this will return false

//indexOf
const names = ["Andy", "Margaret", "Theodore", "Tom"];
names.indexOf("Theodore")   // Returns 2


//indexOf
const names1 = ["Andy", "Margaret", "Theodore", "Tom", "Jason", "Chris", "Margaret"];
names1.lastIndexOf("Margaret")   // Returns 2

//findIndex
const randomNumbers = [1, 5, 7, 23, 44];

randomNumbers.findIndex(greaterThan)   // Returns 4

function greaterThan(limit) {
  return limit > 23;//only the element 44 is greater than 23 and it is located on position 4
}

//find
const randomNumbers1 = [1, 5, 7, 23, 44];

randomNumbers1.find(greaterThan)   // Returns 4

function greaterThan(limit) {
  return limit > 23;//only the element 44 is greater than 23 and it is located on position 4
}