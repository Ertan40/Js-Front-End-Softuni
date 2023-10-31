function subString(str, num1, num2) {
    let newSub = str.substring(num1, num2 + num1)
    console.log(newSub)
}


subString('ASentence', 1, 8)
subString('SkipWord', 4, 7)