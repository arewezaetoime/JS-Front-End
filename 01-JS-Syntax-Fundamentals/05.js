function mathFunc(n1, n2, operation) {
    switch (operation) {
        case '+':
            console.log(n1 + n2)
            break;
        case '-':
            console.log(n1 - n2)
            break;
        case '*':
            console.log(n1 * n2)
            break;
        case '/':
            console.log(n1 / n2)
            break;
        case '%':
            console.log(n1 % n2)
            break;
        case '**':
            console.log(n1 ** n2)
            break;
    }
}



function mathFuncTwo(n1, n2, operation) {
    let result;

    switch (operation) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '/': result = n1 / n2; break;
        case '*': result = n1 * n2; break;
        case '%': result = n1 % n2; break;
        case '**': result = n1 ** n2; break;
    }

    console.log(result);
}