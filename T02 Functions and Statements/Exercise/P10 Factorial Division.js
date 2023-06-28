function factorialDevision(firstNumber, secondNumber) {
    function factorial(number, factorial) {
        for (i = 1; i <= number; i++) {
            factorial *= i;
        }

        return factorial;
    }

    let firstNumberFactorial = factorial(firstNumber, 1);
    let secondNumberFactorial = factorial(secondNumber, 1);

    return (firstNumberFactorial / secondNumberFactorial).toFixed(2);
}

