function odAndEvenSum(input) {
    let array = input.toString().split('');

    let evenSum = 0;
    let oddSum = 0;

    array.forEach( (currentElement) => {
        let currentNumber = Number.parseInt(currentElement);

        if (currentNumber % 2 == 0) {
              evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    })

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

