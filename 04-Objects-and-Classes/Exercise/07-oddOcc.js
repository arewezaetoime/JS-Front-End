function oddOccur(inpur) {
    const wordOccurances = {};
    const words = inpur.toLowerCase().split(' ');

    for (const word of words) {
        if (!wordOccurances.hasOwnProperty(word.toLowerCase())) {
            wordOccurances[word.toLowerCase()] = 0;
        }

        wordOccurances[word.toLowerCase()]++;
    }
    
    const result = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2!== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
    // Object.keys(wordOccurances).forEach(key => console.log(key));
}



function mapSolve(input) {
    const words = input.toLowerCase().split(' ');
    const wordMap = new Map();

    for (const word of words) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 0);
        }

        wordMap.set(word, wordMap.get(word) + 1);
    }

    const result = [];
    for (const [word, occurances] of wordMap) {
        if (occurances % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}


oddOccur('Cake IS SWEET is Soft CAKE sweet Food');