function meetingsPrinter(array) {
    let schedule = {}

    for (let index in array) {
        let currentPair = array[index].split(' ')

        let key = currentPair[0]
        let value = currentPair[1]

        if (Object.keys(schedule).includes(key)) {
            console.log(`Conflict on ${key}!`)
        } else {
            schedule[key] = value
            console.log(`Scheduled for ${key}`)
        }
    }

    for (let key in schedule) {
        console.log(key + ' -> ' + schedule[key])
    }
}

