function convertToJason (name, lastName, hairColor) {
    let person = {'name': name, 'lastName': lastName, 'hairColor': hairColor}
    console.log(JSON.stringify(person))
}

convertToJason ('George', 'Jones', 'Brown')
convertToJason ('Peter', 'Smith', 'Blond')