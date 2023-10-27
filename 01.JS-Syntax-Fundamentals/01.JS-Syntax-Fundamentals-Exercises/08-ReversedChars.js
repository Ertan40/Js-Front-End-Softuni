function reversedChars(...params) {
    output = ""
    for (let i = params.length - 1; i >= 0; i--) {
        output += `${params[i]} `; 
    }
    console.log(output);
}

reversedChars ('a', 'b', 'c')