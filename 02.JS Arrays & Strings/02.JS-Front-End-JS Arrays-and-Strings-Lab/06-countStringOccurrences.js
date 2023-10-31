function solve(text, word) {
    let splittedText 
    splittedText = text.split(" ")
    // console.log(splittedText)
    let counter = 0
    for (let elem of splittedText) {
        if (elem === word) {
            counter += 1
        }
    }
    console.log(counter)
}

solve('This is a word and it also is a sentence','is')
solve('softuni is great place for learning new programming languages','softuni')