function signCheck(firstNumber, secondNumber, thirdNumber) {

    let array = [firstNumber, secondNumber, thirdNumber];

    let negativeNumbersCount = 0

    array.forEach( (currentElement) => {
        if (currentElement < 0) {
            negativeNumbersCount++
        }
    })

    let output = '';
    if (negativeNumbersCount % 2 == 0) {
        output = 'Positive';
    } else {
        output = 'Negative';
    }

    console.log(output);
}

