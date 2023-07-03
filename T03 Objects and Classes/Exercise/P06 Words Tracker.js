function findOccurences(array) {
    let patternArray = array[0].split(' ')
    let register = {}

    for (i = 0; i < patternArray.length; i++) {
        let currentPatternWord = patternArray[i]
        register[currentPatternWord] = 0

        for (j = 1; j < array.length; j++) {
            let currentWord = array[j]

            if (currentWord == currentPatternWord) {
                register[currentPatternWord]++
            }
        }
    }

   

    let entries = Object.entries(register)
  
    entries.sort( (firstPair, secondPair) => {
        let firstPairKey = firstPair[1]
        let secondPairKey = secondPair[1]

        if (firstPairKey > secondPairKey) {
            return - 1
        } else if (firstPairKey < secondPairKey) {
            return 1
        } else {
            return 0
        }
    })

   entries.forEach( (currentPair) => {
       console.log(currentPair[0] + ' - ' + currentPair[1])      
   })

}

// this: 3
// sentence: 2

// The input is an array. The first element of this array is an array of pattern words. The other elements are just words of the sentences.
// The task is to find occurences of the pattern words in the other words. The pairs must be sorted by count in descending 

// findOccurences([
//     'is the', 
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
// )