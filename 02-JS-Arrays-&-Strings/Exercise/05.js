function revealWord(magicWords, template) {
    let magicWordsSeparated = magicWords.split(', ');

    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i <= template.length; i++) {
        if (template[i] === '*' && template[i-1] !== String && startIndex === -1) {
            startIndex = i;
            // console.log(startIndex)
        } else if (template[i] === '*' && i === template.length - 1) {
            endIndex = i;
        } else if (startIndex && template[i] === '*' && template[i + 1] === ' ' && endIndex === -1) {
            endIndex = i;
            // console.log(endIndex);
        } else if (startIndex !== -1 && endIndex !== -1) {
            for (word of magicWordsSeparated) {
                // console.log(word.length)
                if (word.length === (endIndex + 1) - startIndex) {
                    let replacement = '*'.repeat((endIndex + 1) - startIndex)
                    template = template.replace(replacement, word)
                    startIndex = -1;
                    endIndex = -1;
                    magicWordsSeparated.shift();
                }
            }
        } else continue;
    }
    console.log(template);
}

revealWord('great',
's***ftuni is ***** ***** for learning new programming languages')
revealWord('great, learning',
'softuni is ***** place for ******** new programming languages')