function towns (input) {
    let towns = []
    
    input.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ')
        let newTown = {
            'town': town,
            'latitude': (latitude * 1).toFixed(2),
            'longitude': (longitude * 1).toFixed(2)
        }
        towns.push(newTown)
    });
    
    towns.forEach(town => {
        console.log(town)
    });
        
}

towns (['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
towns (['Plovdiv | 136.45 | 812.575'])