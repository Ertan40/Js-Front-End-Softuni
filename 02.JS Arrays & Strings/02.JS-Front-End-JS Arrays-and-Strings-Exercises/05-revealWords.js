function revealWords(...input) {

    let sentence = input.pop();
    // console.log(sentence)
    let words = input[0].split(", ");
    let censored_words = []
    words.forEach(el => {
        let new_el = ''
        for (let i = 0; i < el.length; i++) {
            new_el += "*"
        }
        censored_words.push(new_el)
    });
    // console.log(censored_words)
    for (let i=0; i < words.length; i++) {
        if (sentence.includes(censored_words[i])) {
            sentence = sentence.replace(censored_words[i], words[i])
        }
    }
    console.log(sentence)
}

revealWords('great',
'softuni is ***** place for learning new programming languages')
revealWords ('great, learning',
'softuni is ***** place for ******** new programming languages')