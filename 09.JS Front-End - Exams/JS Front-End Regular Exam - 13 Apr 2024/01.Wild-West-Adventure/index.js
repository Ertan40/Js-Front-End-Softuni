function main(input) {
    // "{hero name} {HP} {bullets}"
    // "FireShot - {character name} - {target}"
    let num_of_chars = parseInt(input.shift());
    let heroes = {};

    for (let i = 0; i < num_of_chars; i++) {
        const [hero, hp, bullets] = input.shift().split(" ");
        heroes[hero] = { hp: parseInt(hp), bullets: parseInt(bullets) };  // { Gus: { hp: 100, bullets: 0 } }
    }

    while (input.length > 0) {
        const command = input.shift().split(" - ");
        const action = command[0];

        if (action === "Ride Off Into Sunset") {
            break;
        }

        if (action === "FireShot") {
            const hero = command[1];
            const target = command[2];
            if (heroes[hero].bullets > 0) {
                heroes[hero].bullets -= 1;
                console.log(`${hero} has successfully hit ${target} and now has ${heroes[hero].bullets} bullets!`);
            } else {
                console.log(`${hero} doesn't have enough bullets to shoot at ${target}!`);
            }
        } else if (action === "TakeHit") {
            const hero = command[1];
            const damage = parseInt(command[2]);
            const attacker = command[3];
            heroes[hero].hp -= damage;
            if (heroes[hero].hp > 0) {
                console.log(`${hero} took a hit for ${damage} HP from ${attacker} and now has ${heroes[hero].hp} HP!`);
            } else {
                console.log(`${hero} was gunned down by ${attacker}!`);
                delete heroes[hero]; // Remove hero if HP is <= 0
            }
        } else if (action === "Reload") {
            const hero = command[1];
            if (heroes[hero].bullets < 6) {
                const curr_bullets = heroes[hero].bullets;
                const reloaded_bullets = 6 - curr_bullets;
                heroes[hero].bullets = 6;
                console.log(`${hero} reloaded ${reloaded_bullets} bullets!`);
            } else {
                console.log(`${hero}'s pistol is fully loaded!`);
            }
        } else if (action === "PatchUp") {
            const hero = command[1];
            const amount = parseInt(command[2]);
            const curr_hp = heroes[hero].hp;
            heroes[hero].hp += amount;
            if (heroes[hero].hp > 100) {
                const recovered_hp = 100 - curr_hp;
                heroes[hero].hp = 100;
                console.log(`${hero} patched up and recovered ${recovered_hp} HP!`);
            } else {
                console.log(`${hero} patched up and recovered ${amount} HP!`);
            }
        }
    }

    for (const [hero, { hp, bullets }] of Object.entries(heroes)) {
        if (hp > 0) { 
            console.log(`${hero}`);
            console.log(` HP: ${hp}`);
            console.log(` Bullets: ${bullets}`);
        }
    }
}

main(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"]);


main((["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
     "TakeHit - Walt - 30 - Bandit",
     "PatchUp - Walt - 20" ,
     "Reload - Jesse",
     "Ride Off Into Sunset"]))

main((["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"]))

