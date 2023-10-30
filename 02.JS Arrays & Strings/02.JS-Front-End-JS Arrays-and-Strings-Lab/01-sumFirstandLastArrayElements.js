function sumFirstandLastArrayElements(input) {
    let firstElement = input[0]
    let lastElement = input[input.length-1]
    let result
    result = firstElement + lastElement
    console.log(result)
}

sumFirstandLastArrayElements([20, 30, 40])
sumFirstandLastArrayElements([10, 17, 22, 33])
sumFirstandLastArrayElements([11, 58, 69])