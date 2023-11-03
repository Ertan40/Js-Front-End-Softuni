function calculator (numOne, numTwo, operator) {
    let result
    switch (operator) {
        case 'multiply':
            result = numOne * numTwo
            break;
        case 'divide':
            result = numOne / numTwo
            break;
        case 'add':
            result = numOne + numTwo
            break;    
        default:
            result = numOne - numTwo
            break;
    }
    console.log(result)
}

calculator (5, 5, 'multiply')
calculator (40,
    8,
    'divide')
calculator (12,
    19,
    'add')
calculator (50,
    13,
    'subtract')