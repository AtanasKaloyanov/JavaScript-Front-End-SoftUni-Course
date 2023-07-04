function productsSorting(array) {
    let products = {}

    array.forEach((currentElement) => {
        let pair = currentElement.split(' : ')
        let key = pair[0]
        let value = pair[1]
        products[key] = value
    })

    let productEntries = Object
        .entries(products)
        .sort((firstPair, secondPair) => {
            let firstFruit = firstPair[0]
            let secondFruit = secondPair[0]

            return firstFruit.localeCompare(secondFruit)
        })

    let dictionary = {}

    productEntries.forEach((currentPair) => {
        let currentPairKey = currentPair[0]
        let currentPairValue = currentPair[1]
        let currentPaiAsString = currentPairKey + ': ' + currentPairValue
        let letter = currentPairKey.charAt(0)

        if (!dictionary.hasOwnProperty(letter)) {
            dictionary[letter] = []
        }

        dictionary[letter].push(currentPaiAsString)
    })

    Object
        .entries(dictionary)
        .forEach( (currentPair) => {
            let key = currentPair[0]
            console.log(key)
            let value = currentPair[1]
            value.forEach( (currentString) => {
                console.log('  ' + currentString)
            })
        })
}

// Inputs:

// productsSorting([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]
// )

// productsSorting([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]
//     )