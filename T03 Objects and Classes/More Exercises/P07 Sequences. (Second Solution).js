function sequences(givenArray) {
    // First Step - parsing every JSON in a number array and sorting every array in ascending order by the length of its elements. Then sorting the numbers in every inner array in descending order. 

    givenArray = givenArray
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .map((currentArray) => currentArray.sort((a, b) => b - a))

    // Second Step - Mapping every element into a String and parsing the array in a Set for removing the repeating strings 

    givenArray = givenArray.map( (currentElement) => currentElement.join(', '))
    givenArray = new Set(givenArray)

       // Third - printing every inner string array with opened and closed bracket  
    
    givenArray.forEach( (element) => console.log(`[${element}]`))
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
