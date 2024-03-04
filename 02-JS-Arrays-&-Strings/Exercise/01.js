function rotateArr(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        let rotatedNumbers = [];
        let firstNumber = numbers[0];

        for (let j = 1; j < numbers.length; j++) {
            rotatedNumbers[j-1] = numbers[j];
        }
        rotatedNumbers[rotatedNumbers.length] = firstNumber;
        numbers = rotatedNumbers;
    }
    console.log(numbers.join(' '));
}


function quickSolve(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstNum = numbers.shift();
        numbers.push(firstNum);

    }
    console.log(numbers.join(' '));
}

// rotateArr([51, 47, 32, 61, 21], 2)