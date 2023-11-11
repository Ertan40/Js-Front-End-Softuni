function main (input) {
    let dictionary = {}
    for (let jsonString of input) {
        let newTerm = JSON.parse(jsonString)
        let [term, definition] = [Object.keys(newTerm), Object.values(newTerm)]
        dictionary[term] = definition
    }
    
    for (let [key, value] of Object.entries(dictionary).sort()) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}

// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
main ([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )

