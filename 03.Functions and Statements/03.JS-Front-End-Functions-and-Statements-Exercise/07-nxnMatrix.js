function solve (number) {
    let array = []
    for (let index = 0; index < number; index++) {
        array.push(number)    
    }
    for (let num in array) {
        console.log(array.join(" "))
    }
}

solve (3)
solve (7)
solve (2)