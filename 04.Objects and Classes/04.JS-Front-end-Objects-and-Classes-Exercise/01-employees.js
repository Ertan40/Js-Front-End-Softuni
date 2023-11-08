function main(input) {
    let employees = {}
    for (let name of input) {
        employees[name] = name.length
        // console.log(employees) //{Samuel Jackson: 14, Will Smith: 10, Bruce Willis: 12, Tom Holland: 11}
    }
    for (let employeeName in employees) {
        let personalNum = employees[employeeName]
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`)
    }
}

main (['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
main (['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])