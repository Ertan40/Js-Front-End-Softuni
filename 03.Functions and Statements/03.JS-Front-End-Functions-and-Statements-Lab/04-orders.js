function solve (product, quantity) {
    let coffee = 1.50
    let water = 1.00
    let coke = 1.40
    let snacks = 2.00
    let totalPrice = 0
    if (product === "water") {
        totalPrice += water * quantity
    } else if (product === "coffee") {
        totalPrice += coffee * quantity
    } else if (product === "coke") {
        totalPrice += coke * quantity
    } else if (product === "snacks") {
        totalPrice += snacks * quantity
    }    
    console.log(totalPrice.toFixed(2))
}

solve ("water", 5)
solve ("coffee", 2)