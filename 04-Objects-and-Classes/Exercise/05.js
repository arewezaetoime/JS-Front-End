function solve(data) {
    const ourHeroes = [];

    for (let line of data) {
        const [heroName, heroLevel, ...items] = line.split(' / ');
        const heroUnit = {
            name: heroName,
            level: Number(heroLevel),
            items: items,
        }
        
        ourHeroes.push(heroUnit);
    }

    console.log(ourHeroes);
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])