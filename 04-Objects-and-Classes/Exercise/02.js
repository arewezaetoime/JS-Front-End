function arrayWithObjects(inputDataArr) {
     const ourObjects = [];

    for (const line of inputDataArr) {
        const [town, lat, long] = line.split(' | ');
        
        ourObjects.push({ town: town, latitude: Number(lat).toFixed(2), longitude: Number(long).toFixed(2) });
    }
    ourObjects.forEach(obj => console.log(obj));
}



function fancySolve(input) {
    input
        .map(row => row.split(' | '))
        .map(([townName, latitude, longitude]) => ({
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }))
        .forEach(town => console.log(town));
}


arrayWithObjects(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])