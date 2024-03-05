function sortArrayNames(namesArr) {
    namesArr.sort((a, b) => a.localeCompare(b)).forEach((name, index) => console.log(`${index + 1}.${name}`));
}


// sortArrayNames(["John", "bob", "Christina", "Ema"]);