function solve(...input) {
    let word = input.shift()
    let sentence = input.pop()
    // console.log(sentence)
    let array = sentence.split(" ")
    let foundWord = false;
    for (let i of array) {
        if (i.toLowerCase() === word.toLowerCase()) {
            console.log(word)
            foundWord = true
            break;
        }
    } if (foundWord !== true) {
        console.log(`${word} not found!`)
    }
}

solve ('javascript', 'JavaScript is the best programming language')
solve ('python', 'JavaScript is the best programming language')
