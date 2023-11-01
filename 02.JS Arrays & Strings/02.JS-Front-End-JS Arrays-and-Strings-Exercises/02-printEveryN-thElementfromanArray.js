function solve(inputArr, step) {
    let arr = []
    for (let i=0; i < inputArr.length; i++) {
        if (i % step === 0) {
            arr.push(inputArr[i])
        }
    }
    return arr
}


solve(['5', '20', '31', '4', '20'], 2)
solve(['dsa','asd', 'test', 'tset'], 2)
solve(['1', '2','3', '4', '5'], 6)