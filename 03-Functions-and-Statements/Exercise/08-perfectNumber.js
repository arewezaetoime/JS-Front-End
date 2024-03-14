function checkValidity(sum, number) {
    if (sum === number) return true; else return false;
}


function findPerfectNum(exampleNumber) {
    let totalSum = 0;

    for (let i = 1; i < exampleNumber; i++) {
        if (exampleNumber % i == 0) {
            totalSum += i;
        }
    }

    if (checkValidity(totalSum, exampleNumber)) {
        return `We have a perfect number!`}
        // console.log('We have a perfect number!')
    // } else {
    //     console.log("It's not so perfect.")
    // }

    return `It's not so perfect.`
}

console.log(findPerfectNum(7));
// ========================================================


// function solve(number) {
//     const calculateSum = numbers => numbers.reduce((a, b) => a + b, 0);
//     const isPerfect = number => calculateSum(getDivisors(number)) === number;

//     if (isPerfect(number)) {
//         console.log('We have a perfect number!');
//     } else {
//         console.log('It\'s not so perfect.');
//     }
// }

// function getDivisors(number) {
//     const divisors = [];

//     for (let i = number - 1; i >= 0; i--) {
//         if (number % i === 0) {
//             divisors.push(i);
//         }
//     }

//     return divisors;
// }
