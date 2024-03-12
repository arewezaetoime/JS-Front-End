function solve(n1, n2, n3) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    return subtract(sum(n1, n2), n3);
}

console.log(solve(23,
    6,
    10))