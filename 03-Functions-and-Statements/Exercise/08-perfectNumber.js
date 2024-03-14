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
        // return `We have a perfect number!`
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }

    // return `It's not so perfect.`
}

console.log(findPerfectNum(6));