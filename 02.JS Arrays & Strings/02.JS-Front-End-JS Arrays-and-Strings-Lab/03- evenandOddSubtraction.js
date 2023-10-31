function evenandOddSubtraction(inputArr) {
    let evenNums = []
    let oddNums = []
    let sumEven = 0
    let sumOdd = 0 
    let diff
    for (let i=0; i< inputArr.length; i++) {
        if (inputArr[i] % 2 === 0) {
            evenNums.push(inputArr[i])
            sumEven += inputArr[i]
        } else {
            oddNums.push(inputArr[i])
            sumOdd += inputArr[i]
        }
    }
    console.log(sumEven - sumOdd)
}

evenandOddSubtraction([1,2,3,4,5,6])
evenandOddSubtraction([3,5,7,9])
evenandOddSubtraction([2,4,6,8,10])