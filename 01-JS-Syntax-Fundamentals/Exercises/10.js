function sumDigits(number) {
    const digits = number.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    return sum;
}


function checkSameDigitsAndSum(num) {
    const numString = num.toString();
    const firstDigit = numString[0];
    let allDigitsSame = true;
    // let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        // sum += parseInt(numString[i]);
        if (numString[i] !== firstDigit) {
            allDigitsSame = false;
            break;
        }
    }

    const result = sumDigits(num)
    console.log(allDigitsSame);
    console.log(result);
}
