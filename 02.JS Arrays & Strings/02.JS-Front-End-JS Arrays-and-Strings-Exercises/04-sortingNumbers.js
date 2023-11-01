function sortingNumbers(numsArray) {
    numsArray.sort((a, b) => a-b)
    // [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
    
    numsArrayLength = numsArray.length / 2;
    // 5
    let newArray = []

    for (i=0; i < numsArrayLength; i++) {
        newArray.push(numsArray.shift())
        newArray.push(numsArray.pop())
    }
    return newArray
    // console.log(newArray)
}

sortingNumbers ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])