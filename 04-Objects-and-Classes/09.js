class Song {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

function solve(data) {
    const myLibrary = {};
    const allSongs = [];
    const numberOfSongs = input.shift();

    for (const i = 1; i < numberOfSongs; i++) {
        const [list, songName, duration] = data[i].split('_')
        myLibrary["all"] = 

    }
}



// function solve(input) {
//     class Song {
//         constructor(name, time) {
//             this.name = name;
//             this.time = time;
//         }
//     }
    
//     const collection = {};
//     const allSongs = [];

//     const numberOfSongs = input.shift();

//     for (let i = 0; i < numberOfSongs; i++) {
//         const [typeList, name, time] = input.shift().split('_');

//         if (!collection[typeList]) {
//             collection[typeList] = [];
//         }

//         const song = new Song(name, time)
//         collection[typeList].push(song);
//         allSongs.push(song);
//     }

//     const typeList = input.shift();
//     if (typeList == 'all') {
//         allSongs.forEach(song => console.log(song.name));
//         // Object.values(collection).flat(1).forEach(song => console.log(song.name));
//     } else {
//         collection[typeList].forEach(song => console.log(song.name));
//     }
// }