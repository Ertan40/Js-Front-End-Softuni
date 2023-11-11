function main (input) {
    let parking = []

    input.forEach(element => {
        let [direction, carNum] = element.split(', ')
        if (direction === 'IN') {
            if (!parking.includes(carNum)) {
                parking.push(carNum)
            }  
        } else if (direction === 'OUT') {
            if (parking.includes(carNum)) {
                let index = parking.indexOf(carNum)
                parking.splice(index, 1)
            }
        }
    });
    if (parking.length > 0 ) {
        parking.sort();
        parking.forEach(element => {
            console.log(element)
        });
    } else {
        console.log ("Parking Lot is Empty")
    }
}


main (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

main (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])