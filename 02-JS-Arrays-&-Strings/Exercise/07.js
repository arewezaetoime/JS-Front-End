function findWord(word, exampleStr) {
    const words = exampleStr.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if (isIncluded) {
        return word;
    }
    return `${word} not found!`
}

// console.log(findWord('javascript','JavaScript is the best programming language'))
// console.log(findWord('python',
// 'JavaScript is the best programming language'))