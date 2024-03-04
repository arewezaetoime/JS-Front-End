function printStep(array, step) {
    let newArr = [];

    for (let i = 0; i < array.length; i+= step) {
        if  (array[i] !== undefined) {
        newArr.push(array[i]);
        }
    }

    return newArr;
}

// printStep(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6);