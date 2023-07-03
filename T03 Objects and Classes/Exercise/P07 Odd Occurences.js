function occurences(text) {
    let array = text.split(' ')
    let register = {}

    for (index = 0; index < array.length; index++) {
        let currentWord = array[index].toLowerCase()


        if (Object.keys(register).includes(currentWord)) {
            register[currentWord]++
        } else {
            register[currentWord] = 1
        }
    }

    let entries = Object.entries(register)

    entries = entries.filter((currentPair) => {
        let currentNumber = currentPair[1]

        return currentNumber % 2 != 0
    })

    entries.sort((firstPair, secondPair) => {
        let firstPairOccurences = firstPair[1]
        let secondPairOccurences = secondPair[1]

        if (firstPairOccurences > secondPairOccurences) {
            return -1
        } else if (firstPairOccurences < secondPairOccurences) {
            return 1
        } else {
            return 0
        }
    })

    let finalArray = entries.map( (currentPair) => { 
        return currentPair[0]
    })

    console.log(finalArray.join(' '))
}

// occurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// occurences('Cake IS SWEET is Soft CAKE sweet Food')

