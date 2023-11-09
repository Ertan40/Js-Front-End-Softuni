function movies (input) {
    // let movie name, director, date
    let movies = []
    for (let key of input) {
        // console.log(key) // addMovie Godfather
        if (key.includes('addMovie')) {
            let name = key.split(' ')
            name.shift()
            name = name.join(' ')
            let movie = {'name': name}
            movies.push(movie)
            // console.log(movie) // {name: 'Fast and Furious'}
        } else if (key.includes('directedBy')) {
            let data = key.split(' ')
            // console.log(data) // ['Inception', 'directedBy', 'Christopher', 'Nolan']
            let index = data.indexOf('directedBy')
            let movieName = data.slice(0, index).join(' ')
            // console.log(movieName) // Inception    Godfather   Fast and Furious
            let directorName = data.slice(index + 1, data.length).join(' ')
            // console.log(directorName) // Christopher Nolan  Francis Ford Coppola  Rob Cohen
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movieName) {
                    movies[i]['director'] = directorName;
                }        
            }
             
        } else if (key.includes('onDate')) {
            let data = key.split(' ')
            let index = data.indexOf('onDate')
            let movieName = data.slice(0, index).join(' ')
            let date = data.slice(index + 1, data.length).join(' ')
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movieName) {
                    movies[i]['date'] = date;
                }        
            }
        }
    }
    for (let info of movies) {
        if (Object.keys(info).length === 3) {
            console.log(JSON.stringify(info));
        }
        // console.log(JSON.stringify(info))
    }
}
    

// output - {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}

movies ([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])