function sequences(givenArray) {
    // First Step - parsing every JSON in a number array and sorting the number in this array in descending order. Then sorting every array in ascending order by the length of its elements
    
    givenArray = givenArray.map( (currentStringArray) => {
        let currentNumberArray = JSON.parse(currentStringArray)
        return currentNumberArray.sort( (a, b) => b - a)
    }).sort( (a, b) => a.length - b.length)

    // Second Step - Removing every repeating array by parsing every Array in String and :

    for (i = givenArray.length - 1; i >= 0; i--) {
        let currentArray1 = givenArray[i].join('')
        for (j = i - 1; j >= 0; j--) {
            let currentArray2 = givenArray[j].join('')

            if (currentArray1 == currentArray2) {
                givenArray.splice(i, 1)
            }
        }
    }

    // Third - printing every inner array as string with opened and closed bracket  
    givenArray.forEach(el => console.log(`[${el.join(', ')}]`));
}


// inputs:

// sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"]
// )

// sequences(["[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]"]
// )




// input -> givenArray of strings. Every element of this givenArray constains an inner number givenArray

// output -> only the unique arrays with their numbers sorted in ascending order
