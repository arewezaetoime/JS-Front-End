function loopObject(objectCity) {

    for (let key in objectCity) {
        console.log(`${key} -> ${objectCity[key]}`);
    }
}


function secondLoopObject(objectCity) {
    Object.keys(objectCity).forEach(propName => console.log(`${propName} -> ${objectCity[propName]}`))
}

loopObject({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

console.log("--------------------------------");

secondLoopObject({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})