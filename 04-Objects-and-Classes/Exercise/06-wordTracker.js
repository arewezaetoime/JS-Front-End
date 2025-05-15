function wordTrack(input) {
    const words = {};
    const wordsPattern = input.shift().split(' ');

    for (const word of wordsPattern) {
        words[word] = 0;
    }

    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }

    const sortedWords = Object.entries(words)
        .sort((a, b) => b[1] - a[1]);

    for (const [word, occurrences] of sortedWords) {
        console.log(`${word} - ${occurrences}`)
    }
}


function fancySolve(input) {
    
}


wordTrack([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])