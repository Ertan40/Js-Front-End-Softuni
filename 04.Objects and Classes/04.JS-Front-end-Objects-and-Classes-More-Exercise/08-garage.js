function main (input) {
    let garages = {}

    input.forEach(element => {
        let info = element.split(' - ') // ['1', 'color: blue, fuel type: diesel']
        let garage = parseInt(info.shift())
        if (garage in garages) {

        } else {
            garages[garage] = [];
        }
        for (let i of info) {
            let car = []
            data = i.split(', ') // ['color: blue', 'fuel type: diesel']
            for (let d of data) {
                d = d.split(': ') // ['color', 'blue'] ['fuel type', 'diesel']
                car.push(`${d[0]} - ${d[1]}`)
            }
            garages[garage].push(car)
        }
    });
    
    for (let garage in garages) {
        console.log(`Garage № ${garage}`)
        for (let g of garages[garage]) {
            console.log (`--- ${g.join(', ')}`)
        }
    }
}
main (['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol',
 '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])