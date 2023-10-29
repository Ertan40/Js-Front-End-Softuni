function calculate(num1, operator, num2) {
    let result
    if (operator === '+') {
        result = num1 + num2
    } else if (operator === '-') {
        result = Math.abs(num1 - num2)
    } else if (operator === '/') {
        result = num1 / num2
    } else if (operator === '*') {
        result = num1 * num2
    }
    console.log(result.toFixed(2))
}

calculate(5, '+', 10)
calculate(25.5, '-', 3)