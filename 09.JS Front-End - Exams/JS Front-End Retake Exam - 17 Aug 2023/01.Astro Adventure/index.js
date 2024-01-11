function solve(input) {
    const n = Number(input.shift());
    let team = {};

    for (let index = 0; index < n; index++) {
        let data = input.shift().split(" ");
        let [astronautName, oxygenLevel, energyReserves] = data;
        team[astronautName] = {
            "oxygen": Number(oxygenLevel),
            "energy": Number(energyReserves)
        };
    }

    for (let el of input) {
        let [action, astronautName, amount] = el.split(" - ");

        if (action === 'End') {
            break;
        } else if (action === 'Explore') {
            amount = Number(amount);
            if (team[astronautName].energy >= amount) {
                team[astronautName].energy -= amount;
                console.log(`${astronautName} has successfully explored a new area and now has ${team[astronautName].energy} energy!`);
            } else {
                console.log(`${astronautName} does not have enough energy to explore!`);
            }
        } else if (action === 'Refuel') {
            amount = Number(amount);
            let initial = Number(team[astronautName].energy)
            if (team[astronautName].energy + amount <= 200) {
                team[astronautName].energy += amount;
                console.log(`${astronautName} refueled their energy by ${amount}!`);
            } else {
                console.log(`${astronautName} refueled their energy by ${200 - initial}!`);
                team[astronautName].energy = 200
            }
        
        } else if (action === 'Breathe') {
            let initial = Number(team[astronautName].oxygen)
            amount = Number(amount);
            if (team[astronautName].oxygen + amount <= 100) {
                team[astronautName].oxygen += amount;
                console.log(`${astronautName} took a breath and recovered ${amount} oxygen!`);
            } else {
                console.log(`${astronautName} took a breath and recovered ${100 - initial} oxygen!`)
                team[astronautName].oxygen = 100
            }
        }
    }
    for (let name of Object.keys(team)) {
        console.log(`Astronaut: ${name}, Oxygen: ${team[name].oxygen}, Energy: ${team[name].energy}`);
    }
}

solve([
    '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'
]);

solve([
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End'
]);
