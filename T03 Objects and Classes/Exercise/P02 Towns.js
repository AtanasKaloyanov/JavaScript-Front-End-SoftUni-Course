function townsPrinter(array) {
    for (let index in array) {
        let currentTown = array[index].split(' | ')

        let townName = currentTown[0]
        let latitude = currentTown[1]
        let longitude = currentTown[2]

        let town = {}
        town['town'] = townName
        town['latitude'] = Number.parseFloat(latitude).toFixed(2)
        town['longitude'] = Number.parseFloat(longitude).toFixed(2)

        console.log(town)
    }
}

// townsPrinter(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// )

