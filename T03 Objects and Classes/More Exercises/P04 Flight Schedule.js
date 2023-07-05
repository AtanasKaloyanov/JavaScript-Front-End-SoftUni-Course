function airport(array) {
    let allFlights = array[0]
    let flightsWithChandgedStatus = array[1]

    let table = []
    
    allFlights.forEach( (currentFlight) => {
        let currentFlightArray = currentFlight.split(' ')
        let currentFlightNumber = currentFlightArray[0]
        let currentFlightDestination = ''

        for (i = 1; i < currentFlightArray.length; i++) {
            currentFlightDestination += currentFlightArray[i] + ' '
        }

        currentFlightDestination = currentFlightDestination.trim()

        let object = {
            Destination: currentFlightDestination,
            Status: ''
        }

        let isTheStatusChanged = false

        flightsWithChandgedStatus.forEach( (currentChangedStatusFlight) => {
            let currentChangedStatusFlightArray = currentChangedStatusFlight.split(' ')

            let currentChangedStatusFlightNumber = currentChangedStatusFlightArray[0]

            if (currentFlightNumber == currentChangedStatusFlightNumber) {
                let currentChangedStatus = currentChangedStatusFlightArray[1]

               object['Status'] = currentChangedStatus

                table.push(object)
                isTheStatusChanged = true
                return
            }
            
        })

        if (isTheStatusChanged) {
           return
        }

         object['Status'] = 'Ready to fly'
         table.push(object)
    })

    let command = array[2]

    if (command == 'Ready to fly') {
        table = table.filter( (currentFlight) => {
            return currentFlight['Status'] == 'Ready to fly'
        })
    } else {
          table = table.filter( (currentFlight) => {
            return currentFlight['Status'] != 'Ready to fly'
          })
    }

    table.forEach( (currentFlight) => {
        console.log(currentFlight)
    })
}


// the input is an array in the array:
// index 0 is an array that holds all flights at a specific sector. This is an exmaple of every element of this array -> ['flightNumber Destination', 'numberOfTheFlight Destination' ...]
// index 1 is an array that holds a flightNumber and a changed status -> ['flightNumber changedNumber', 'flightNumber changedNumber'...]
// index 2 is a command. If this command is 'Ready to fly'  -> Than printing the flights that have not changed their status in the second array. Otherwise printing the flight that have changed their status

// airport([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
// ])

// airport([['WN269 Delaware',
//    'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
// 	'WN612 Cancelled',
// 	'WN1173 Cancelled',
// 	'SK330 Cancelled'],
// 	['Ready to fly']
// ])


