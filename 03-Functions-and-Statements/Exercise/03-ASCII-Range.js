function findAsciiRange(firstLetter, secondLetter) {
    const asciiNum1 = firstLetter.charCodeAt();
    const asciiNum2 = secondLetter.charCodeAt();
    
    let ceilValue = Math.max(asciiNum1, asciiNum2);

    function findTheLowestAsciiValue(n1, n2) {
        if (n1 < n2) return n1; else return n2;
    }

    let result = [];

    for (let i = findTheLowestAsciiValue(asciiNum1, asciiNum2) + 1; i < ceilValue; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

findAsciiRange('a', 'd')
findAsciiRange('#',
':')