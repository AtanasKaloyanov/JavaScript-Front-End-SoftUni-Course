function numberModification(number) {
    let stringArray = number.toString().split('')
    let numberArray = stringArray.map((currentElement) => {
        return Number.parseInt(currentElement)
    })

    let sum = numberArray.reduce( (a, b) => a + b, 0);
    let average = sum / numberArray.length

        while (average <= 5) {
            numberArray.push(9)
            let sum = numberArray.reduce((a, b) => a + b, 0);
            average = sum / numberArray.length    
        }

        console.log(numberArray.join(''))
    }
    


