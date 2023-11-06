function solve (number) {
    
    let numberStr = number.toString().split('')
    while (true) {
        let sum = 0;
        numberStr.forEach(element => {
            sum += element * 1
        });
        let avgSum = sum / numberStr.length
        if (avgSum <= 5) {
            numberStr.push('9')
        } else {
            break;
        }
    }
    console.log (numberStr.join(''))
}

solve (101)
solve (5835)