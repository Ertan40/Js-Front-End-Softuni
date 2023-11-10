function registerForHeroes(input) {
    // The name is a string, a level is a number, and the items are all strings.
    let storage = [];

    for (let d of input) {
        let data = d.split(' / ');
        let hero = { 'hero': data[0], 'level': parseInt(data[1]), 'items': data[2].split(', ') };
        storage.push(hero);
    }

    // Sort the array by level in ascending order
    let sortedByLevel = storage.sort((a, b) => a.level - b.level);

    sortedByLevel.forEach(element => {
        console.log(`Hero: ${element.hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items.join(', ')}`);
        // console.log('\n');
    });
}

registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
