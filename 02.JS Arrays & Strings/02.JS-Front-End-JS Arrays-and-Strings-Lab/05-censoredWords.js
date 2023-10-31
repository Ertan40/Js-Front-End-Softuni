function replace(text, word) {
    
    while (text.includes(word)) {
        text = text.replace(word, "*".repeat(word.length)) 
    }
    console.log(text)
}

replace('A small sentence with some words', 'small')
replace('Find the hidden word', 'hidden')