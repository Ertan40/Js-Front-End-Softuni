function converttoUppercase(string) {
    let matches = string.match(/[a-zA-Z0-9]+/g);
    console.log(matches.join(", ").toUpperCase())
    // console.log(matches)
}


converttoUppercase('Hi, how are you?')
converttoUppercase('hello')