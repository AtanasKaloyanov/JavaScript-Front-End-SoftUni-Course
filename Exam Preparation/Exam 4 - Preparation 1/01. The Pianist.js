function solve(array) {
    let songNumber = Number.parseInt(array[0])

    let opera = []

    for (i = 1; i <= songNumber; i++) {
        let currentSonInfo = array[i].split('|')

        let object = {}

        let currentSong = currentSonInfo[0]
        let currentComposer = currentSonInfo[1]
        let currentKey = currentSonInfo[2]

        object.song = currentSong
        object.composer = currentComposer
        object.key = currentKey

        opera.push(object)
    }

    for (i = songNumber + 1; i < array.length; i++) {
        let currentInfo = array[i].split('|')

        if (currentInfo.includes('Add')) {
            let songName = currentInfo[1]
            let composer = currentInfo[2]
            let key = currentInfo[3]

            let object = {}
            object.song = songName
            object.composer = composer
            object.key = key

          let searched = opera.find( (currentElement) => {
            return currentElement.song == songName
          })

            if (searched === undefined) {
                opera.push(object)
                console.log(`${object.song} by ${object.composer} in ${object.key} added to the collection!`)
            } else {
                console.log(`${songName} is already in the collection!`)
            }


        } else if (currentInfo.includes('Remove')) {
            let songName = currentInfo[1]

            let searchedObject = opera.find((element) => {
                return element.song == songName
            })

            if (searchedObject === undefined) {
                console.log(`Invalid operation! ${songName} does not exist in the collection.`)
            } else {
                let objectIndex = opera.indexOf(searchedObject)
                opera.splice(objectIndex, 1)
                console.log(`Successfully removed ${songName}!`)
            }
        } else if (currentInfo.includes('ChangeKey')) {
            let songName = currentInfo[1]
            let newKey = currentInfo[2]

            let searched = opera.find((currentElement) => {
                return currentElement.song == songName
            })

            if (searched === undefined) {
                console.log(`Invalid operation! ${songName} does not exist in the collection.`)
            } else {
                 searched.key = newKey
                 console.log(`Changed the key of ${songName} to ${newKey}!`)
            }
        } else if (currentInfo.includes('Stop')) {
            break;
        }
    }

    opera.forEach( (currentElement) => { 
        console.log(`${currentElement.song} -> Composer: ${currentElement.composer}, Key: ${currentElement.key}`)
    })
}


// Inputs:

// solve([
//   '3',
//   'Fur Elise|Beethoven|A Minor',
//   'Moonlight Sonata|Beethoven|C# Minor',
//   'Clair de Lune|Debussy|C# Minor',
//   'Add|Sonata No.2|Chopin|B Minor',
//   'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//   'Add|Fur Elise|Beethoven|C# Minor',
//   'Remove|Clair de Lune',
//   'ChangeKey|Moonlight Sonata|C# Major',
//   'Stop'
// ]
// )

// solve([
//   '4',
//   'Eine kleine Nachtmusik|Mozart|G Major',
//   'La Campanella|Liszt|G# Minor',
//   'The Marriage of Figaro|Mozart|G Major',
//   'Hungarian Dance No.5|Brahms|G Minor',
//   'Add|Spring|Vivaldi|E Major',
//   'Remove|The Marriage of Figaro',
//   'Remove|Turkish March',
//   'ChangeKey|Spring|C Major',
//   'Add|Nocturne|Chopin|C# Minor',
//   'Stop'
// ])