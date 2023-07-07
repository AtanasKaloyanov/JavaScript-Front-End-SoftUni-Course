function garage(array) {
    let autoPark = {}
    array.forEach( (currentString) => {
        let currentArray = currentString.split(' - ')
        let key = currentArray[0]
        let currentInformation = currentArray[1]
        currentInformation = currentInformation.split(':').join(' -')
         // currentInformation = currentInformation.replaceAll(':', ' -')

        if (!autoPark.hasOwnProperty(key)) {
            autoPark[key] = []
        }

        autoPark[key].push(currentInformation)
    })

    for (let key in autoPark) {
        console.log(`Garage № ${key}`)
        autoPark[key].forEach( (currentInformation) => {
        console.log(`--- ${currentInformation}`)
        })
    }
}

// inputs:

// garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol'])


// input - array of strings. Every string is an array, which first element is a garage (key of a map). The second element is an information about a car

// the output is printing of an associative array

// key                      value
// number of a garage       [information1, information2...]
