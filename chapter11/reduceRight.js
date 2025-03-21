//reduceRight method
 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

let sum = numbers.reduceRight(function (acc, currentValue) {
    console.log('accumulator: ', acc, 'current value:', currentValue);
    return acc + currentValue;
});
console.log(sum);