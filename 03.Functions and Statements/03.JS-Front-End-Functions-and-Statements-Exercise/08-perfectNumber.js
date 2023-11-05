function findsPerfectNum(number) {
    let array= []
    for (let index = 1; index < number; index++) {
        
        if (number % index === 0) {
            array.push(index)
        }
    }
    let sum = array.reduce((a, b) => {
        return a + b})
    
    if (sum === number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }   
}

findsPerfectNum (6)
findsPerfectNum (28)
findsPerfectNum (1236498)