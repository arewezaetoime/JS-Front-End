function censoringString(text, word) {
    let idx = text.indexOf(word)

    while (idx >= 0) {
        text = text.replace(word, '*'.repeat(word.length));

        idx = text.indexOf(word)
    }

    console.log(text);
}