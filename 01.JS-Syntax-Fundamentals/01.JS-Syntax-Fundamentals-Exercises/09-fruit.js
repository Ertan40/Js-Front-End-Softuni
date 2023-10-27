function main(fruit, weight, money) {
    
    needed_money = weight * 0.001 * money
    console.log(`I need $${needed_money.toFixed(2)} to buy ${(weight * 0.001).toFixed(2)} kilograms ${fruit}.`)
}

main('orange', 2500, 1.80)
main('apple', 1563, 2.35)

// 