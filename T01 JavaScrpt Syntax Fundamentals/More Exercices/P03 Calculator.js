function calculate(number1, operator, number2) {
    result = 0.0;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
    }
    return result.toFixed(2);
}

/*
console.log(calculate(5, '+', 10));
console.log(calculate(25.5, '-', 3));
console.log(calculate(5.5, '/', 2));
console.log(calculate(5.8899, '*', 2));
*/