function bookShelf (input) {
    let shelves = {}

    input.forEach(element => { 
        let newData = element.split(' -> ')
        if (newData.length > 1) {
            let [shelf, genre] = newData;
            if (!(shelf in shelves)) {
                shelves[shelf] = {
                    'shelfId': shelf,
                    'genre': genre,
                    'books': []
                }
            } 
        } else {
            newData = newData[0].split(": "); // ['Death in Time', 'Criss Bell, mystery']
            let title = newData.shift();
            let [author, genre] = newData[0].split(', ');
            for (const [key, value] of Object.entries(shelves)) {
                if (value['genre'] === genre) {
                    shelves[key]['books'].push([title, author])
                }
            }
        }
    });
    let sorted = Object.values(shelves).sort((a,b) => b['books'].length - a['books'].length)
    sorted.forEach(el => {
        console.log (`${el.shelfId} ${el.genre}: ${el.books.length}`)
        sortedBooks = el.books.sort((a,b) => a[0].localeCompare(b[0]))
        for (const key of sortedBooks) {
            console.log(`--> ${key[0]}: ${key[1]}`);
        }
    });
}

bookShelf (['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery',
'3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action',
'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance',
'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])