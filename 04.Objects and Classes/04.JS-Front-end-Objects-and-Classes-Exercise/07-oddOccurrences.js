function oddOccurrences (input) {
    occurrences = {}
    words = input.toLowerCase().split(' ')
    // console.log(words) // ['java', 'c#', 'php', 'php', 'java', 'php', '3', 'c#', '3', '1', '5', 'c#']
    for (let word of words) {
        if (word in occurrences) {
            occurrences[word] += 1
        } else {
            occurrences[word] = 1
        } 
    }
    // console.log(occurrences) // {1: 1, 3: 2, 5: 1, java: 2, c#: 3, php: 3}
    let output = []
    for (let key in occurrences) {
        if (occurrences[key] % 2 !== 0) {
            output.push(key)
        }
    }
    console.log (output.join(' '))
}

oddOccurrences ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences ('Cake IS SWEET is Soft CAKE sweet Food')