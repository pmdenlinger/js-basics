//Sparse arrays where items/elements are missing
const yearlySales = [ , 5, , 12];
console.log(yearlySales.length);//expected output:4
//adding a new element beyond the length for example on position 11
yearlySales[11] = 17;
console.log(yearlySales);
//increase the length
yearlySales.length = 13;
//we can delete an element
delete yearlySales[0];//returns true

const newArray = [1,2,3,4,,5,6];

//map function skips the holes during itteration but will return hole in the new array
const array1 = [ 1, , 2 ];
const array1Map = array1.map(item =>  item);
console.log(array1Map) // Output: (3) [1, empty, 2]

//solution to end sparse arrays
//using the filter method to filter out the holes
const array2 = [ 1, , 2 ];
const array2Map = array1.filter(item =>  item);
console.log(array2Map) // Output: (2) [1, 2]