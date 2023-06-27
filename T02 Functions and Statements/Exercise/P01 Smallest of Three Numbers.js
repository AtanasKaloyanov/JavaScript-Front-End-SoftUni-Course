function findTheSmallestNumber(firstNumber, secondNumber, thirdNumber) {
    let array = [firstNumber, secondNumber, thirdNumber]

    array.sort( (a, b) => {
        return a-b
    })

    console.log(array[0]);
}

