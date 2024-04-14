function wildWestAdventure(input) {
    const posseSize = parseInt(input[0]);
    const posse = {};
    
    for (let i = 1; i <= posseSize; i++) {
        const [name, hp, bullets] = input[i].split(" ");
        posse[name] = { hp: parseInt(hp), bullets: parseInt(bullets) }
    }

    function FireShot(character, target) {
        if (posse[character].bullets > 0) {
            posse[character].bullets--;
            console.log(`${character} has successfully hit ${target} and now has ${posse[character].bullets} bullets!`);
        } else {
            console.log(`${character} doesn't have enough bullets to shoot at ${target}!`);
        }
    }

    function TakeHit(character, damage, attacker) {
        posse[character].hp -= damage;
        if (posse[character].hp > 0) {

            console.log(`${character} took a hit for ${damage} HP from ${attacker} and now has ${posse[character].hp} HP!`);
        } else {
            console.log(`${character} was gunned down by ${attacker}!`);

            delete posse[character];
        }
    }

    function Reload(character) {
        if (posse[character].bullets < 6) {
            const bulletsReloaded = 6 - posse[character].bullets;
            posse[character].bullets = 6;
            console.log(`${character} reloaded ${bulletsReloaded} bullets!`);
        } else {
            console.log(`${character}'s pistol is fully loaded!`);
        }
    }

    function PatchUp(character, amount) {
        posse[character].hp += amount;
        if (posse[character].hp > 100) {
            posse[character].hp = 100;
        }
        console.log(`${character} patched up and recovered ${amount} HP!`);
    }

    for (let i = posseSize + 1; i < input.length; i++) {
        const [action, ...args] = input[i].split(" - ");
        switch (action) {
             case "FireShot":
                FireShot(...args);

                break;
            case "TakeHit":
                TakeHit(...args.map((arg, index) => index === 1 ? parseInt(arg) : arg));

                break;
            case "Reload":
                Reload(...args);

                break;
            case "PatchUp":
                PatchUp(...args.map((arg, index) => index === 1 ? parseInt(arg) : arg));

                break;
            case "Ride Off Into Sunset":

                break;
            default:
                console.log("Invalid command");
        }
    }

    Object.keys(posse).forEach(character => {
        console.log(`${character}\n  HP: ${posse[character].hp}\n  Bullets: ${posse[character].bullets}`);
    });
}

const input = ["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"];

wildWestAdventure(input);