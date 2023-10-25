function main(num1, num2, num3){
    
    let result;
    if (num1 > num2 && num1 > num2) {
        result = num1;
    }
    if (num2 > num1 && num2 > num3) {
        result = num2;
    }
    if (num3 > num2 && num3 > num1) {
        result = num3;
    }
    console.log(`The largest number is ${result}.`)
}

main(5, -3, 16)
main(-3, -5, -22.5)

// second way:
function main(...params) {
    let max_number = -1000000;
    params.forEach(element => {
        if (element > max_number) {
            max_number = element
        }
    });
    console.log(`The largest number is ${max_number}.`);
}

main(5, -3, 16)
main(-3, -5, -22.5)