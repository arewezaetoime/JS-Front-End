function isPalindrome(integer) {
    const numForwards = integer.toString();
    const numBackwards = numForwards.split('').reverse().join('');

    // console.log(numForwards, numBackwards);

    return numForwards === numBackwards;
}


function solve(integersArray) {
    integersArray.forEach(number => console.log(isPalindrome(number)));
}

isPalindrome([123,323,421,121]);
solve([123,323,421,121]);