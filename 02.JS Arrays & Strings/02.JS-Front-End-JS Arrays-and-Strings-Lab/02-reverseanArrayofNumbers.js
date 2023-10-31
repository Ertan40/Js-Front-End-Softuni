function solve(number, inputArr) {
    let arr = [];
    for (let i=0; i < number; i++) {
        arr.push(inputArr[i])
    }
    console.log(arr.reverse().join(" "))
}


solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])   