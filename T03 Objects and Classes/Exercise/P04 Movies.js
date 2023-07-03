function cinema(array) {
    let catalog = []

    for (let index in array) {
        let currentMovie = {}

        let currentInformation = array[index]
        let movieName = ''

        if (currentInformation.includes('addMovie')) {
            let movieName = currentInformation.replace('addMovie ', '')
            currentMovie['name'] = movieName
            catalog.push(currentMovie)

        } else if (currentInformation.includes('directedBy')) {
            let movieNameAndDirector = currentInformation.split(' directedBy ')

            movieName = movieNameAndDirector[0]
            let movieDirector = movieNameAndDirector[1]

            catalog.forEach((currentMovie) => {
                let currentMovieName = currentMovie.name

                if (currentMovieName == movieName) {
                    currentMovie['director'] = movieDirector
                }
            })


        } else if (currentInformation.includes('onDate')) {
            let movieNameAndData = currentInformation.split(' onDate ')
            movieName = movieNameAndData[0]
            let date = movieNameAndData[1]

            catalog.forEach((currentMovie) => {
                let currentMovieName = currentMovie.name

                if (currentMovieName == movieName) {
                    currentMovie['date'] = date
                }
            })
        }
    }

    catalog.forEach((currentMovie) => {
        if (Object.entries(currentMovie).length == 3) {
            console.log(JSON.stringify(currentMovie))
        }
    })
}

// [
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ]
    
// cinema([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ])

