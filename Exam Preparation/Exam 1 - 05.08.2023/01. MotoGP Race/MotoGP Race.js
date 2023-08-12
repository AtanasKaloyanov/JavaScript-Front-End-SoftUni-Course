function solve(array) {
    let ridersNumber = Number.parseInt(array[0])

    let riders = []

    for (i = 1; i <= ridersNumber; i++) {
        let currentRiderArray = array[i].split('|')

        let currentRider = {}
        let currentRiderName = currentRiderArray[0]
        let currentRiderFuel = Number.parseFloat(currentRiderArray[1])
        let currentRiderPosition = Number.parseInt(currentRiderArray[2])

        currentRider.name = currentRiderName
        currentRider.fuel = currentRiderFuel
        currentRider.position = currentRiderPosition

        riders.push(currentRider)
    }

    for (j = ridersNumber + 1; j < array.length; j++) {
        let current = array[j].split(' - ')

        if (current.includes('StopForFuel')) {
            let riderName = current[1]

            let rider = riders.find((currentRider) => {
                return currentRider.name == riderName
            })

            let minimumFuel = Number.parseFloat(current[2])

            if (rider.fuel < minimumFuel) {
                let newPosition = Number.parseInt(current[3])
                rider.position = newPosition
                console.log(`${riderName} stopped to refuel but lost his position, now he is ${newPosition}.`)
            } else {
                console.log(`${riderName} does not need to stop for fuel!`)
            }

        } else if (current.includes('Overtaking')) {
            let firstRiderName = current[1]
            let secondRiderName = current[2]

            let firstRider = riders.find((currentRider) => {
                return currentRider.name == firstRiderName
            })

            let secondRider = riders.find((currentRider) => {
                return currentRider.name == secondRiderName
            })

            let firstRiderPosition = firstRider.position
            let secondRiderPosition = secondRider.position

            if (firstRiderPosition < secondRiderPosition) {
                secondRider.position = firstRiderPosition
                firstRider.position = secondRiderPosition

                console.log(`${firstRiderName} overtook ${secondRiderName}!`)
            }

        } else if (current.includes('EngineFail')) {
            let riderName = current[1]
            let lapsLeft = current[2]

            riders = riders.filter((currentRider) => {
                return currentRider.name != riderName
            })

            console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        }
    }

    riders.sort((a, b) => a.position > b.position)

    riders.forEach((currentRider) => {
        console.log(currentRider.name)
        console.log(`  Final position: ${currentRider.position}`)
    })

}

// Inputs:

// solve(["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])

// solve(["4",
// "Valentino Rossi|100|1",
// "Marc Marquez|90|3",
// "Jorge Lorenzo|80|4",
// "Johann Zarco|80|2",
// "StopForFuel - Johann Zarco - 90 - 5",
// "Overtaking - Marc Marquez - Jorge Lorenzo",
// "EngineFail - Marc Marquez - 10",
// "Finish"])

/*
1. Adding the riders:
the first line of the input - the participants of the race - n
the next n lines the input is {rider}|{fuel capacity}|{position}. The rider's fuel capacity can be maximum 100% 

2. Commands, separated by "-" until Finish command:

"StopForFuel - {rider} - {minumum fuel} - {changed position}"

"Overtaking - {rider 1} - {rider 2}"

"EngineFail - {rider} - {laps left}


*/

