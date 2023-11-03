function repeatString(string, repeatCount) {
    let output = ""

    for (let index = 0; index < repeatCount; index++) {
        output += string 
        }
    // console.log(output)
    return output
}


repeatString ("abc", 3)
repeatString ("String", 2)