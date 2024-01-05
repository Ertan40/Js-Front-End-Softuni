function main(input) {

    const numOfRiders = parseInt(input.shift());
    const riders = {};

    for (let i = 0; i < numOfRiders; i++) {
        const [rider, fuel, position] = input.shift().split('|');
        riders[rider] = { fuel: parseInt(fuel) > 100 ? 100 : parseInt(fuel), position: parseInt(position) };
    }

    while (input.length > 0) {
        const command = input.shift().split(' - ');
        const action = command[0];
        if (action === 'StopForFuel') {
            const rider = command[1];
            const minFuel = parseInt(command[2]);
            const changedPos = parseInt(command[3]);
            if (riders[rider].fuel < minFuel) {
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPos}.`);
                riders[rider].position = changedPos;
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (action === 'Overtaking') {
            const rider1 = command[1];
            const rider2 = command[2];
            if (riders[rider1].position < riders[rider2].position) {
                console.log(`${rider1} overtook ${rider2}!`);
                const tempPosition = riders[rider1].position;
                riders[rider1].position = riders[rider2].position;
                riders[rider2].position = tempPosition;
            }
        } else if (action === 'EngineFail') {
            const rider = command[1];
            const lapsLeft = Number(command[2]);
            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            delete riders[rider];
        } else if (action === 'Finish') {
            break;
        }
    }

    for (const [rider, { position }] of Object.entries(riders)) {
        console.log(`${rider}\n  Final position: ${position}`);
    }
}

main (["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

// main (["4",
// "Valentino Rossi|100|1",
// "Marc Marquez|90|3",
// "Jorge Lorenzo|80|4",
// "Johann Zarco|80|2",
// "StopForFuel - Johann Zarco - 90 - 5",
// "Overtaking - Marc Marquez - Jorge Lorenzo",
// "EngineFail - Marc Marquez - 10",
// "Finish"])
