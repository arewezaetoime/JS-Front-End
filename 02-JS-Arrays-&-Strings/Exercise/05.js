function revealWord(magicWords, template) {
    let magicWordsSeparated = magicWords.split(', ');

    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '*') {
            startIndex = i;
        }
    }
}

revealWord('great',
'softuni is ***** place for learning new programming languages')