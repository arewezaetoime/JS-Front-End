// function pritnObject(obj) {
//     Object.keys(obj).forEach(key => console.log(`${key}: ${obj[key]}`));
//     return;
// }

// function pritnObject(obj) {
//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

function convertJsonToObject(json) {
    let object = JSON.parse(json);
    
    return Object.keys(object).forEach(key => console.log(`${key}: ${object[key]}`));
}

console.log('this is how JSON looks like')
console.log('{"name": "George", "age": 40, "town": "Sofia"}')
console.log('This is how the object looks like')
console.log(convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}'))