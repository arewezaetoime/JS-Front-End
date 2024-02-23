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

mathFunc(2, 3, '+')