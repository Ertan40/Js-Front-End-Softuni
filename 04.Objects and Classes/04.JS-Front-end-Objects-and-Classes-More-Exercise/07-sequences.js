function main(array) {
    let lastArray = []
    for (let currArray of array) {
        currArray = JSON.parse(currArray).sort((a, b) => b-a);
        lastArray.push(currArray);
    }
    lastArray = lastArray.map(x => JSON.stringify(x));
    // console.log(lastInput) // ['[4,3,2,1,0,-1,-2,-3]', '[13,10,2,1,0,-17]', '[4,3,2,1,0,-1,-2,-3]']
    lastArray = [...new Set(lastArray)] // ['[4,3,2,1,0,-1,-2,-3]', '[13,10,2,1,0,-17]']
    lastArray = lastArray.map(x => JSON.parse(x)).sort((a, b) => a.length - (b.length))
    lastArray.forEach(element => {
        console.log(`[${element.join(', ')}]`)
    });
}

main (["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])

main (["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"])