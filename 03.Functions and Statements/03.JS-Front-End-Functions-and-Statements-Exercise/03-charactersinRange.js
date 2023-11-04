function solve (char1, char2) {
    let asNumber1 = char1.codePointAt()
    let asNumber2 = char2.codePointAt()
    let array = []
    if (asNumber1 > asNumber2) {
        [asNumber1, asNumber2] = [asNumber2, asNumber1]
    }
    for (let index = asNumber1 + 1; index < asNumber2; index++) {
        array.push(String.fromCharCode(index))
        
    }
    console.log(array.join(' '))
}

solve ('a', 'd')
solve ('#', ':')
solve ('C', '#')

// charCodeAt()