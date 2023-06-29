function factorial(result, number) {
    result *= number
    number = number - 1
    
    if (number == 0) {
        return result
    }

    return factorial(result, number)
}

console.log(factorial(1, 4)) // 24