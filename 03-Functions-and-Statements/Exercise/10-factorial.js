function getFactorial(number) {
    if (number <= 1) return 1;

    return number * getFactorial(number - 1);
}


function solve(num1, num2) {
    const result = getFactorial(num1) / getFactorial(num2);

    console.log(result.toFixed(2));
}