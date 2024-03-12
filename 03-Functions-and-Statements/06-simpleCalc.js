// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }



function calculate(n1, n2, operation) {
    const result = {
        'add': n1 + n2,
        'subtract': n1 - n2,
        'divide': n1 / n2,
        'multiply': n1 * n2,
    }
    
    possibleOperations = ['add', 'subtract', 'divide', 'multiply']

    if (possibleOperations.includes(operation)) {
        return result[operation];
    }
    return `wrong input. try again.`
}

console.log(calculate(5,
    5,
    'multiply'))





function calculate(n1, n2, operation) {
    
    possibleOperations = ['add', 'subtract', 'divide', 'multiply']

    if (operation === 'add') {
        return (n1, n2) => n1 + n2;
    }

    return `wrong input. try again.`
}

console.log(calculate(5,
    5,
    'add'))


function fancySolve(n1, n2, operation) {
    const operations = {
        multiply: (n1, n2) => n1 * n2,
        divide: (n1, n2) => n1 / n2,
        add: (n1, n2) => n1 + n2,
        subtract: (n1, n2) => n1 - n2,
    }

    return operations[operation](n1, n2);
}
console.log(fancySolve(2, 5, 'add'));