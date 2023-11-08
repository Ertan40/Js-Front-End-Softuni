function addressBook(inputArr) {
    let addressInfo = {}
    for (let info of inputArr) {
        let [name, address] = info.split(':')
        addressInfo[name] = address;
    }
    // inputArr.forEach(element => {     
    //     let [name, address] = element.split(":")
    //     addressInfo[name] = address
    // });
    // console.log(addressInfo) // {Tim: 'Doe Crossing', Bill: 'Ornery Rd', Peter: 'Carlyle Ave'}
    let sortedKeys = Object.keys(addressInfo).sort((a, b) => a.localeCompare(b))
    // console.log(sortedKeys) // ['Bill', 'Peter', 'Tim']
    for (let key in sortedKeys) {
        console.log (`${sortedKeys[key]} -> ${addressInfo[sortedKeys[key]]}`)
    }
    // sortedKeys.forEach(key => {
    //     console.log(`${key} -> ${addressInfo[key]}`);
    // });
}

addressBook (['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])

// Bill -> Ornery Rd
// Peter -> Carlyle Ave
// Tim -> Doe Crossing