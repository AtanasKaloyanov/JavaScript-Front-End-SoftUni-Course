function radio(array) {
    class Song {
        constructor(typeList, name, time) { 
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let command = array[array.length - 1]

    let songs = []

    for (index = 1; index < array.length - 1; index++) {
        let currentSongArray = array[index].split('_')

        let typeList = currentSongArray[0]
        let name = currentSongArray[1]
        let time = currentSongArray[2]

        let currentSong = new Song(typeList, name, time)
        songs.push(currentSong)
    }

    songs.forEach( (currentSong) => {
        if (command == 'all') {
            console.log(currentSong.name)
        } else {
            if (currentSong.typeList == command) {
                console.log(currentSong.name)
            }
        }
    })
}

