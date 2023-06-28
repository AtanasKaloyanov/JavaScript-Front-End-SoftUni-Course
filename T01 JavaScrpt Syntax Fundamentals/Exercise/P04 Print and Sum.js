function printAndSum(firstNumber, secondNumber) {
    let array = [];
    for (i = firstNumber; i <= secondNumber; i++) {
        array.push(i);
    }

    console.log(array.join(' '));
    
    let sum = array.reduce( (a, b) => {
        return a + b;
    })

    console.log(`Sum: ${sum}`);
}

 