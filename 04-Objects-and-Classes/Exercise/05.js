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

    ourHeroes.sort((a, b) => a.level - b.level).forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`));

    // console.log(ourHeroes);
}


function fancySolve(data) {
    data.map(row => row.split(' / '))
        .map(([heroName, heroLevel, items]) => ({
            name: heroName,
            level: Number(heroLevel),
            items: items,
        })).sort((a, b) => a.level - b.level).forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`))
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

fancySolve(([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]))