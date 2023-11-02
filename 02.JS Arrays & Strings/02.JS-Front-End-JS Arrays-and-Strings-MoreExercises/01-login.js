function login(inputArr) {
    let user = inputArr.shift()
    let password = user.split("").reverse().join("")
    let counter = 0
    // console.log(user)    Acer
    // console.log(password)    recA
    // console.log(inputArr)     ['login', 'go', 'let me in', 'recA']
    for (let index = 0; index < inputArr.length; index++) {
        const element = inputArr[index];
        counter += 1
        if (element === password) {
            console.log(`User ${user} logged in.`)
            break
        } else if (counter === 4) {
            console.log(`User ${user} blocked!`)
            break
        } 
        else {
            console.log("Incorrect password. Try again.")
        }
    }
}

login (['Acer','login','go','let me in','recA'])
login (['momo','omom'])
login (['sunny','rainy','cloudy','sunny','not sunny'])