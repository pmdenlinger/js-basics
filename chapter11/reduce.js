const salesFigures = [1, 3, 11, 145, 9, 199, 44, 33, 22, 48, 17, 90];
const sum = salesFigures.reduce(function (accumulator, monthlySales) {
    return accumulator + monthlySales;
}, 0);
console.log('Total sales for the entire year is: $', sum);
// Expected output: Total sales for the entire year is: $ 622