let arr = [1, 2, [3,4], 5];

const arrayFlat = arr.flatMap(x => [x, x * 2]);


//nested array sorted with flat method 
const users = [
    ['Andy', 0],
    ['Tom', 1],
    ['Carol',2],
    ['Jason',3]
  ];

const flattenUsers = users.flat();
console.log(flattenUsers);//Expected output: (8) ['Andy', 0, 'Tom', 1, 'Carol', 2, 'Jason', 3]

//same result on normal users array
const users1 = ['Andy', 'Tom','Carol','Jason'];

const flattenUsers1 = users1.flatMap((element, index) => [element, index]);
//expected Output:  ['Andy', 0, 'Tom', 1, 'Carol', 2, 'Jason', 3]
console.log(flattenUsers1);

//flat method on two levels
const oneLevel = [[1], [2]];
console.log(oneLevel.flat()); // same as oneLevel.flat(1) - Expected output: [1,2]

const twoLevels = [[[1, 2]]];
console.log(twoLevels.flat(2)); // Expected output: [1,2]