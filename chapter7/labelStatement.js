//label statement
const numbersArray = [1,2,3,4,5,6,7,8,9,10];
for(item of numbersArray){
    console.log(item);
}

//let us use lebel to name our for loop

even:
for(item of numbersArray){
    console.log(item);
}
//now we can modify the above loop to find all even numbers using the modulo operator
even:
for(item of numbersArray){
    if(item % 2 == 1) continue even;
    console.log(item);
    //this will print: 2, 4, 6, 8, 10
}


//nested loops example
for (let i = 0; i <= 2; i++) {
    console.log("Outer level loop " + i);
    for (let j = 0; j <= 2; j++) {
      console.log("..Inside loop " + j);
    }
  }
  //nested loops to log all of the elements in two dimensional array
  let myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
//using nested loops to print out the elements of the two-dimensional array
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      console.log(myArray[i][j]);
    }
  }
//labels in nested loops
loopOne: for (let i = 0; i < 3; i++) {
    loopTwo: for (let j = 0; j < 3; j++) {
      if (i == 1 ) continue loopOne;
      if (j == 1) break loopTwo;
      console.log(`i: ${i} & j:${j}`);
    }
  }