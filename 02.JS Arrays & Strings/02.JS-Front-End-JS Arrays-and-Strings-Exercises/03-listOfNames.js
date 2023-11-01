function solve(namesArray) {
    // let sortedNames = namesArray.sort()
    sortedNames = namesArray.sort((x, y) => x.localeCompare(y))
    for (let i=0; i < namesArray.length; i++) {
        console.log (`${i+1}.${sortedNames[i]}`)
    }
}

solve (["John", "Bob", "Christina", "Ema"])