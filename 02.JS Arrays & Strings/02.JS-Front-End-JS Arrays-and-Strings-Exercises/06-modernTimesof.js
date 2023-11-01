function solve(string) {
    // console.log(string.split(" "))
    // ['Nowadays', 'everyone', 'uses', '#', 'to', 'tag', 'a', '#special', 'word', 'in', '#socialMedia']
    let stringArray = string.split(" ")
    for (let i=0; i < stringArray.length; i++)
       if (stringArray[i].startsWith("#")) {
        stringArray[i] = stringArray[i].substring(1)
        if (stringArray[i] === "") {

        } else if (!/[^a-zA-Z]/.test(stringArray[i])) {
            console.log(stringArray[i]);
        }
    }
}

solve ('Nowadays everyone uses # to tag a #special word in #socialMedia')