function airport(array) {
    let schedule = {}

    array[0].forEach((innerArray) => {
        let [flightNumber, ...destination] = innerArray.split(' ')

        schedule[flightNumber] = {
            Destination: destination.join(' '),
            Status: 'Ready to fly'
        }
    })

    array[1].forEach( (currentElement) => {
        let[flightNumber, status] = currentElement.split(' ')

        if (schedule.hasOwnProperty(flightNumber)) {
           schedule[flightNumber].Status = status
        }
    })

    let command = array[2]

    for (let flightNumber in schedule) {
        if (schedule[flightNumber].Status == command) {
            console.log(schedule[flightNumber])
        }
    }

}

// airport([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'],
//  ['Cancelled']
// ])

// airport([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ]
// )