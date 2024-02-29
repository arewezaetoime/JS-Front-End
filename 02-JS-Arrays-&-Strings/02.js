function reverse(n, exampleArray) {
    let newArr = [];
    
    for (let i = n - 1; i >= 0; i--) {
        newArr.push(exampleArray[i]);
    }

    console.log(newArr.join(' '));
}

// reverse(3, [10, 20, 30, 40, 50]);
// reverse(4, [-1, 20, 99, 5]);