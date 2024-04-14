function wildWestAdventure(input) {

    const eCharacters = {};
    const numsChars = parseInt(input[0], 10);

    for (let i = 1; i <= numsChars; i++) {
        const [name, hp, bullets] = input[i].split(' ');
        eCharacters[name] = { hp: parseInt(hp, 10), bullets: parseInt(bullets, 10) };
    }

    for (let i = numsChars + 1; i < input.length; i++) {
        if (input[i] === "Ride Off Into Sunset") break;

        const parts = input[i].split(" - ");
        const currCommand = parts[0];
        const name = parts[1];

        switch (currCommand) {
            case "FireShot":
                const target = parts[2];
                if (eCharacters[name].bullets > 0) {
                    eCharacters[name].bullets--;
                    console.log(`${name} has successfully hit ${target} and now has ${eCharacters[name].bullets} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case "TakeHit":
                const dmgStat = parseInt(parts[2], 10);
                const ourAttacker = parts[3];
                if ((eCharacters[name].hp -= dmgStat) > 0) {
                    console.log(`${name} took a hit for ${dmgStat} HP from ${ourAttacker} and now has ${eCharacters[name].hp} HP!`);
                } else {
                    console.log(`${name} was gunned down by ${ourAttacker}!`);
                    delete eCharacters[name];
                }
                break;
            case "Reload":
                const bullets = 6 - eCharacters[name].bullets;
                if (bullets > 0) {
                    eCharacters[name].bullets += bullets;
                    console.log(`${name} reloaded ${bullets} bullets!`);
                } else {
                    console.log(`${name}'s pistol is fully loaded!`);
                }
                break;
            case "PatchUp":
                const currAmount = parseInt(parts[2], 10);
                const healingAmount = Math.min(100 - eCharacters[name].hp, currAmount);
                eCharacters[name].hp += healingAmount;
                if (healingAmount > 0) {
                    console.log(`${name} patched up and recovered ${healingAmount} HP!`);
                } else {
                    console.log(`${name} is in full health!`);
                }
                break;
        }
    }

    Object.entries(eCharacters).forEach(([name, stats]) => {
        console.log(`${name}\n HP: ${stats.hp}\n Bullets: ${stats.bullets}`);
    });
}

// Example usage:
// wildWestAdventure(["2", "Gus 100 0", "Walt 100 6", "FireShot - Gus - Bandit", "TakeHit - Gus - 100 - Bandit", "Reload - Walt", "Ride Off Into Sunset"]);

wildWestAdventure(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])
