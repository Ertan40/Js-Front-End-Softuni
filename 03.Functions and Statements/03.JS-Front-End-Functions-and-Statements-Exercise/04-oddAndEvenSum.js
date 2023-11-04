function solve (number) {
    let oddSum = 0
    let evenSum = 0
    let string = number.toString()
    // console.log(string)
    for (let num of string) {
        if (parseInt(num) % 2 === 0) {
            evenSum += parseInt(num)
        } else {
            oddSum += parseInt(num)
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve (1000435)
solve (3495892137259234)