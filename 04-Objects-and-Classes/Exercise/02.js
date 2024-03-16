function arrayWithObjects(inputDataArr) {
     const ourObjects = [];

    for (const line of inputDataArr) {
        const [town, lat, long] = line.split(' | ');
        
        ourObjects.push({ town: town, latitude: Number(lat).toFixed(2), longitude: Number(long).toFixed(2) });
    }
    ourObjects.forEach(obj => console.log(obj));
}


arrayWithObjects(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])