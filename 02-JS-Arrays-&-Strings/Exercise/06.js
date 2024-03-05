function findSpecialWords(input) {
    const pattern = /#(?<word>[a-zA-z]+)/g;

    const matches = input.matchAll(pattern);

    for (const match of matches) {
        console.log(match.groups.word);
    }
}

// findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')