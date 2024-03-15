function arrToObj(arr) {
    let phoneBook = {};

    for (let line of arr) {
       let [name, phone] = line.split(' ');

       phoneBook[name] = phone;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}