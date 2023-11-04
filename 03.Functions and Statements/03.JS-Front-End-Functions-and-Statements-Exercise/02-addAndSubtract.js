function solve (num1, num2, num3) {
    
    const sum = (num1, num2) => num1 + num2;
    const substract = (num1, num2) => num1 - num2;
    
    let total = substract (sum(num1, num2), num3)
    
    console.log (total)
}


solve (23, 6, 10)
solve (1,
    17,
    30)
solve (42,
    58,
    100)