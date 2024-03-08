// Fast and easy solution

// function mathPower(num, power) {
//     return Math.pow(num, power);
// }


// Algorithmic solution

function mathPower(num, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= num;
    }

    return result;
}