//Throw statement
function getMonthName(monthIndex) {
let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
if (monthsArray[monthIndex] !== undefined) {
    return monthsArray[monthIndex];
} else {
    throw new Error('Wrong Month Number!');
}
}

try {
// statements to try
let currentMonth = 14; // 14 will go into else statement and throw new Error
currentMonth - 1;//We decrease the month to reflect the correct index in the monthsArray. The array starts from index 0, where for example will be January
let monthName = getMonthName(currentMonth);
console.log(monthName);
} catch (e) {
monthName = 'unknown';
console.error(e.message, e.name); // pass exception object to err handler
}
