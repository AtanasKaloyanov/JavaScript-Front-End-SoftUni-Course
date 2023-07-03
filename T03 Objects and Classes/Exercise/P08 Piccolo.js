function parking(array) {
    let cars = []

    for (let index in array) {
        let commandAndCar = array[index].split(', ')
        let currentCommand = commandAndCar[0]
        let currentCar = commandAndCar[1]

        if (currentCommand == 'IN' && !cars.includes(currentCar)) {
            cars.push(currentCar)
        } else if (currentCommand == 'OUT' && cars.includes(currentCar)) {
            let carIndex = cars.indexOf(currentCar)
            cars.splice(carIndex, 1)
        }
    }

    if (cars.length == 0) {
        console.log('Parking Lot is Empty')
        return
    }
    
    cars.sort()
    cars.forEach((currentCar) => console.log(currentCar))
}

// the input is an array. Every element of this array consist of command (IN or OUT) and a number of a car). When the command is IN - adding, OUT - removing

// parking(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// )

// parking(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA'])
