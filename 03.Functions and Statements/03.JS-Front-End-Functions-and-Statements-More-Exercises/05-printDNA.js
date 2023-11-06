function printDNA(num) {
    let structure = 'ATCGTTAGGG'.split('')
    let symbols = [['**', '', '**'], ['*', '--', '*'], ['', '----', ''], ['*', '--', '*']];

    for (let index = 0; index < num; index++) {
        let first = structure.shift()
        let second = structure.shift()
        
        let index_symbols = index;
        while(index_symbols > 3){
            index_symbols -= 4
        }
        
        let start = symbols[index_symbols][0];
        let middle = symbols[index_symbols][1];
        let end = symbols[index_symbols][2];
        console.log(`${start}${first}${middle}${second}${end}`);

        structure.push(first)
        structure.push(second)
    }
}


printDNA (4)
printDNA (10)
