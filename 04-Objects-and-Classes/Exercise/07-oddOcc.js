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


oddOccur('Cake IS SWEET is Soft CAKE sweet Food');