function solve(array) {
    let ridersNumber = array[0]

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

    riders.forEach( (rider) => {
        console.log(rider)
    })
}


solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])





/*
1. Adding the riders:
the first line of the input - the participants of the race - n
the next n lines the input is {rider}|{fuel capacity}|{position}. The rider's fuel capacity can be maximum 100% 

2. Commands, separated by "-" until Finish command:

"StopForFuel - {rider} - {minumum fuel} - {changed position}"

"Overtaking - {rider 1} - {rider 2}"

"EngineFail - {rider} - {laps left}


*/

