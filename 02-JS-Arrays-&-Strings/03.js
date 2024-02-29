function evenOddSubtract(exampleArr) {
    let evenNums = 0;
    let oddNums = 0;

    for (num of exampleArr) {
        if (num % 2 !== 0) {
            oddNums += num;
        } else {
            evenNums += num;
        }
    }

    console.log(evenNums - oddNums);
}

// evenOddSubtract([1,2,3,4,5,6])