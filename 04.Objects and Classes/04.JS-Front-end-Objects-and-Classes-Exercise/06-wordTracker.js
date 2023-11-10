function wordsTracker (input) {

    occurrences = {}
    let words = input.shift().split(' ')
    for (let word of words) {
        occurrences[word] = 0
    }
    
    for (let word of words) {
        for (let searched of input) {
            if (word === searched) {
                occurrences[searched] += 1
            }
        }
    }
    // console.log(occurrences) // {this: 3, sentence: 2}
    for (const [word, count] of Object.entries(occurrences).sort((a, b) => b[1] - a[1])) {
        console.log (`${word} - ${count}`)
    }     
}

wordsTracker (['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
wordsTracker ([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])


    