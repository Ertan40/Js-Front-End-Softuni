function main(inputArr) {
    let cat = {}
    inputArr.forEach(element => {
        let [name, age] = element.split(' ')
        cat[name] = age
    });
    // console.log (cat) // {Mellow: '2', Tom: '5'}
    for (let name in cat) {
        console.log (`${name}, age ${cat[name]} says Meow`)
    }
}

main (['Mellow 2', 'Tom 5'])
main (['Candy 1', 'Poppy 3', 'Nyx 2'])

