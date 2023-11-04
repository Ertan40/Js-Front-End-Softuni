function findsPalindrome (inputArr) {
    
    for (let index = 0; index < inputArr.length; index++) {
        let element = inputArr[index];
        if (element === parseInt(element.toString().split('').reverse().join(''))) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

findsPalindrome ([123,323,421,121])
findsPalindrome ([32,2,232,1010])