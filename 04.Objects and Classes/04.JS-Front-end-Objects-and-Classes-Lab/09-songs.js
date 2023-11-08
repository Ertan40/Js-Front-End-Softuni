function main(input) {
    let songs = []
    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name,
            this.time = time
        }
    }
    input.shift();
    let filter = input.pop();
    
    input.forEach(el => {
        let [type, name, time] = el.split("_");
        songs.push(new Song(type, name, time));
    });
    for (let i = 0; i < songs.length; i++) {
        if (filter === 'all') {
            console.log(songs[i].name);
        } else {
            if (filter === songs[i].type) {
                console.log(songs[i].name);
            }
        }  
    }
}
main ([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])