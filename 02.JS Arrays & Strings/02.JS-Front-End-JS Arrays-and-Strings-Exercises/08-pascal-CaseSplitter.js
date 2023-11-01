function solve (string) {
    let output = []
    let currentWord = ""
    for (let i=0; i < string.length; i++ ) {
        if (string[i] === string[i].toUpperCase()) {
            if (currentWord) {
                output.push(currentWord)
            }
            currentWord = ""
        }
        currentWord += string[i]
        if (i === string.length - 1) {
            output.push(currentWord)
        }  
    }
    console.log(output.join(", "))    
}

solve ('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve ('HoldTheDoor')
solve ('ThisIsSoAnnoyingToDo')