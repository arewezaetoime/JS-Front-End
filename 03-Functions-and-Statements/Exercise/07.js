function makeMatrix(nDimensionInteger) {
    let matrix = [];

    for (let i = 0; i < nDimensionInteger; i++) {
        let = levelMatrix = [];

        for (let j = 0; j < nDimensionInteger; j++) {
            levelMatrix.push(nDimensionInteger)
        }
        matrix.push(levelMatrix);
    }

    for (row of matrix) {
        console.log(row.join(' '));
    }
}

makeMatrix(2)