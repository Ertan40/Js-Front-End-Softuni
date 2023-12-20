function main(input) {
    let n = Number(input.shift())
    let baristas = {}

    for (let index = 0; index < n; index++) {
        let [name, shift, drinks] = input.shift().split(' ')
        drinks = drinks.split(',')
        baristas[name] = { shift, drinks }
    }
    function prepare(order) {
        let [_, name, shift, coffeeType] = order.split(' / ')

        if (baristas[name].shift === shift && baristas[name].drinks.includes(coffeeType)) {
            console.log(`${name} has prepared a ${coffeeType} for you!`)
        } else {
            console.log(`${name} is not available to prepare a ${coffeeType}.`)
        }
    }
    function changeShift(command) {
        let [_, name, newShift] = command.split(' / ')
        baristas[name].shift = newShift
        console.log(`${name} has updated his shift to: ${newShift}`)
    }
    function learn(command) {
        let [_, name, newCoffeeType] = command.split(' / ')

        if (baristas[name].drinks.includes(newCoffeeType)) {
            console.log(`${name} knows how to make ${newCoffeeType}.`)
        } else {
            baristas[name].drinks.push(newCoffeeType);
            console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`)
        }
    }

    for (let command of input) {
        if (command === 'Closed') break

        if (command.startsWith('Prepare')) {
            prepare(command)
        } else if (command.startsWith('Change Shift')) {
            changeShift(command)
        } else if (command.startsWith('Learn')) {
            learn(command)
        }
    }

    for (let [name, data] of Object.entries(baristas)) {
        console.log(`Barista: ${name}, Shift: ${data.shift}, Drinks: ${data.drinks.join(', ')}`);
    }
}

main ([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed'])

// main(['4',
// 'Alice day Espresso,Cappuccino',
// 'Bob night Latte,Mocha',
// 'Carol day Americano,Mocha',
// 'David night Espresso',
// 'Prepare / Alice / day / Espresso',
// 'Change Shift / Bob / day',
// 'Learn / Carol / Latte',
// 'Prepare / Bob / night / Latte',
// 'Learn / David / Cappuccino',
// 'Prepare / Carol / day / Cappuccino',
// 'Change Shift / Alice / night',
//  'Learn / Bob / Mocha',
// 'Prepare / David / night / Espresso',
// 'Closed']
// )


