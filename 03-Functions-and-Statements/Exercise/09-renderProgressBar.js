function checkValidity(number) {
    if (number % 10 === 0) return true; else return false;
}

function isNumValid(number) {
    if (number <= 100 && number >= 0) return number;
}

// function checkLoading(number) {
//     if (number < 100 && number >= 0) return true; else return false;
// }

function drawProgressBar(number) {

    if (number === 100) {
        return '100% Complete!\n[%%%%%%%%%%]'
    }

    const progressPosition = number / 10

    if (checkValidity(number)) {
        let progressBar = `${number}% [${'%'.repeat(progressPosition)}${'.'.repeat(10 - progressPosition)}]\nStill loading...`;
        return progressBar;
    }


    // if (checkLoading(number)) {
    //     console.log("Still loading...")
    // }

    // if (checkValidity(number)) {
    //     for (let i = )
    // }

}

console.log(drawProgressBar(100))