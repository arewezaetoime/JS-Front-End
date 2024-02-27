// function isLeapYear(year) {
//     return year % 4 === 0 && year % 100 === 1;
// }

// console.log(isLeapYear(1984))

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 === 1);
// }

function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return console.log('yes');
    }

    console.log('no');
}