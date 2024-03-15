function convertObjToJSON(fName, lName, hairColor) {
    let currentData = {
        name: fName,
        lastName: lName,
        hairColor: hairColor,
    };

    const currentJson = JSON.stringify(currentData);

    // console.log(currentJson);
    return currentJson;
}

console.log(convertObjToJSON('George', 'Jones', 'Brown'))