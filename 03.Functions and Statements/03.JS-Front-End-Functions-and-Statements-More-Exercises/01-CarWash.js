function carWash(inputArr) {
    let value = 0;
   
    for (let index = 0; index <inputArr.length; index++) {
        
        if (inputArr[index] === 'soap') {
            value += 10
        } else if (inputArr[index] === 'water') {
            value *= 1.2 
        } else if (inputArr[index] === 'vacuum cleaner') {
            value *= 1.25 
        } else if (inputArr[index] === 'mud') {
            value *= 0.9 
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)   
}

carWash (['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash (["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])

// • soap – add 10 to the value
// • water – increase the value by 20%
// • vacuum cleaner – increase the value by 25%
// • mud – decrease the value by 10%

// console.log(`The car is {value}% clean.`)