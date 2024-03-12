function solve(n1, n2, n3) {

    numArray = [n1, n2, n3];

    for (let i = 0; i < numArray.length; i++) {

        if (numArray[i] < 0 && numArray[i+1] && numArray [i+1] < 0) return `Positive`
        if (numArray[i] < 0) {
            return `Negative`
        }
    }
    return `Positive`
}


console.log(solve( 5,
    12,
   -15))



function solve2(n1, n2, n3) {
    const multiply = (n1, n2) => n1 * n2;

    if (multiply(multiply(n1, n2), n3) >= 0) return 'Positive'; else return 'Negative';
}

console.log(solve2( 5,
    12,
   -15))