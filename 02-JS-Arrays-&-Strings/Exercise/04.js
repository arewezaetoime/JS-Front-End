function sortNumbers(numbers) {
    let preSortedNums = numbers.sort((a, b) => a - b);
    let newlySortedNums = [];

    const copyLength = preSortedNums.slice();

    while (preSortedNums.length > 0) {
        let firstNum = preSortedNums.shift();
        let lastNum = preSortedNums.pop(); 
        
        newlySortedNums.push(firstNum);

        if (lastNum) {
            newlySortedNums.push(lastNum);
        }
        
        
    }
    return newlySortedNums;
}

// console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
