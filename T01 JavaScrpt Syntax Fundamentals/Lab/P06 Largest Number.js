function largestNumberDefinition(firstNumber, secondNumber, thirdNumber) {
    let largestNumber;
    
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        largestNumber = firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        largestNumber = secondNumber
    } else {
        largestNumber = thirdNumber;
    }

    console.log(`The largest number is ${largestNumber}.`)
}



