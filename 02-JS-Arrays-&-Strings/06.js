function occurencesOfWord(exampleSentence, searchedWord) {
    let wordsArr = exampleSentence.split(' ');
    let counter = 0;

    for (let word of wordsArr) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}