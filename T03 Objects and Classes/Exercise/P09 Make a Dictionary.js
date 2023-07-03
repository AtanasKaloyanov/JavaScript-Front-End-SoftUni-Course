function dictionary(array) {
    let finalObject = {}

    for (let currentText of array) {
        let currentObject = JSON.parse(currentText)
        let key = Object.keys(currentObject)[0]
        let value = Object.values(currentObject)[0]

        finalObject[key] = value
    }

    let entries = Object.entries(finalObject)

    entries.sort( (firstPair, secondPair) => {
        return firstPair[0].localeCompare(secondPair[0])
    })

    entries.forEach( (currentPair) => {
        console.log(`Term: ${currentPair[0]} => Definition: ${currentPair[1]}`)
    })
}

// The input is an array, consisted of JSON text. Every element must be parsed to object. And then every object m

// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]
// )

