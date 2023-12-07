function main(input) {
    let collection = {}

    numOfPieces = input.shift() 
     
    for (let index = 0; index < numOfPieces; index++) {
        let [piece, composer, key] = input.shift().split("|")
        collection[piece] = {composer, key}
    }

    while (input.length > 0) { 
        let command = input.shift().split("|")  
        let action = command[0]
            
        if (action === "Add") {
            let piece = command[1] 
            let composer = command[2]
            let key = command[3]
            if (!collection.hasOwnProperty(piece)) {
                collection[piece] = {composer, key}
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (action === "Remove") {
            let piece = command[1] 
            if (collection.hasOwnProperty(piece)) {
                delete collection[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action === "ChangeKey") {
            let piece = command[1]
            let newKey = command[2]
            if (collection.hasOwnProperty(piece)) {
                collection[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action === "Stop") {
            break
        }
    }
    // Object.keys(collection).sort((a, b) => a.localeCompare(b))
    Object.keys(collection).forEach(piece => {
        console.log(`${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}`);
        });
}

main([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
]);


  main([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )

